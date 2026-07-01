#!/usr/bin/env node
/**
 * Plan verification step 3 — browser checks for homepage hero.
 * Requires dev server at BASE_URL (default http://localhost:3000).
 * Run: node scripts/verify-hero-browser.mjs
 */
import { chromium } from "playwright";
import { writeFileSync } from "node:fs";
import { resolve } from "node:path";

const scratch =
  process.env.HERO_SCRATCH_DIR ??
  "/var/folders/p8/235138dn23s5jnjqgdb9vbnr0000gp/T/grok-goal-f6e06603e591/implementer";
const baseUrl = process.env.BASE_URL ?? "http://localhost:3000";
const logPath = resolve(scratch, "hero-launch.log");

const lines = [];

function log(line) {
  lines.push(line);
  console.log(line);
}

async function measure(page) {
  return page.evaluate(() => {
    const hero = document.getElementById("top");
    const header = document.querySelector("header");
    const headline = hero?.querySelector("h1");
    const placeholder = hero?.querySelector("[data-hero-image-placeholder]");
    const overlay = hero?.querySelector(".hero-overlay");
    const content = hero?.querySelector(".hero-content");
    const heroRect = hero?.getBoundingClientRect();
    const headerRect = header?.getBoundingClientRect();
    const viewport = window.innerHeight;
    const heroHeight = heroRect?.height ?? 0;
    const headerHeight = headerRect?.height ?? 0;
    const summed = heroHeight + headerHeight;
    const summedDelta = Math.abs(summed - viewport);

    return {
      viewport,
      heroHeight,
      headerHeight,
      summed,
      summedDelta,
      hasHeadline: Boolean(headline?.textContent?.trim()),
      headlineInContent: Boolean(content?.contains(headline)),
      hasPlaceholder: Boolean(placeholder),
      placeholderVisible:
        Boolean(placeholder) &&
        placeholder.offsetWidth > 0 &&
        placeholder.offsetHeight > 0,
      hasOverlay: Boolean(overlay),
    };
  });
}

function loadPass(metrics, errors) {
  const viewportSumOk = metrics.summedDelta <= 4;
  return (
    errors.length === 0 &&
    viewportSumOk &&
    metrics.hasHeadline &&
    metrics.headlineInContent &&
    metrics.hasPlaceholder &&
    metrics.placeholderVisible &&
    metrics.hasOverlay
  );
}

async function runLoadCheck(browser, runIndex) {
  const page = await browser.newPage();
  const errors = [];
  page.on("pageerror", (err) => errors.push(`pageerror: ${err.message}`));
  page.on("console", (msg) => {
    if (msg.type() !== "error") return;
    const text = msg.text();
    if (text.includes("hero.jpg") && text.includes("404")) return;
    errors.push(`console: ${text}`);
  });

  await page.goto(baseUrl, { waitUntil: "networkidle" });
  const metrics = await measure(page);
  const pass = loadPass(metrics, errors);

  log(`Load run ${runIndex}: pass=${pass}`);
  log(
    `  #top height=${metrics.heroHeight}px + navbar height=${metrics.headerHeight}px = ${metrics.summed}px; viewport=${metrics.viewport}px; delta=${metrics.summedDelta}px`,
  );
  log(
    `  observation: #top bounding box height plus measured navbar height equals viewport height within ~4px: ${metrics.summedDelta <= 4 ? "YES" : "NO"}`,
  );
  log(
    `  overlaid headline=${metrics.hasHeadline} visible placeholder=${metrics.placeholderVisible} overlay layer=${metrics.hasOverlay}`,
  );
  if (errors.length) log(`  errors: ${errors.join("; ")}`);

  if (runIndex === 1) {
    await page.screenshot({
      path: resolve(scratch, "hero-screenshot.png"),
      fullPage: false,
    });
    log(`  screenshot saved to ${resolve(scratch, "hero-screenshot.png")}`);
  }

  await page.close();
  return pass;
}

async function main() {
  log(`Plan step 3 — browser verification`);
  log(`BASE_URL=${baseUrl}`);

  const browser = await chromium.launch({ headless: true });
  try {
    const run1 = await runLoadCheck(browser, 1);
    const run2 = await runLoadCheck(browser, 2);
    const ok = run1 && run2;
    log(
      ok
        ? "\nPlan step 3 browser verification passed (both load runs)."
        : "\nPlan step 3 browser verification failed.",
    );
    writeFileSync(logPath, lines.join("\n") + "\n");
    process.exit(ok ? 0 : 1);
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  log(`FATAL: ${err.message}`);
  writeFileSync(logPath, lines.join("\n") + "\n");
  process.exit(1);
});