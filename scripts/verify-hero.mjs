#!/usr/bin/env node
/**
 * Plan verification step 2 — structural checks for homepage hero.
 * Run: node scripts/verify-hero.mjs
 */
import { readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const page = readFileSync(resolve(root, "app/page.tsx"), "utf8");
const globals = readFileSync(resolve(root, "app/globals.css"), "utf8");

const heroViewportBlock = globals.match(/@utility hero-viewport \{[\s\S]*?\}/)?.[0] ?? "";

const checks = [
  {
    id: "2a",
    name: "hero #top bleeds behind header with full viewport height",
    pass:
      /id="top"/.test(page) &&
      /hero-viewport/.test(page) &&
      /min-height:\s*100dvh/.test(heroViewportBlock) &&
      /margin-top:\s*calc\(-1 \* var\(--header-height/.test(heroViewportBlock),
  },
  {
    id: "2b",
    name: "background layer element/class exists for the hero image",
    pass:
      /hero-background/.test(page) &&
      /data-hero-image-placeholder/.test(page),
  },
  {
    id: "2c",
    name: "hero text/CTAs/chips sit in a separate content layer above the background",
    pass:
      /hero-content/.test(page) &&
      /hero-overlay/.test(page) &&
      !/md:grid-cols-\[1\.1fr_0\.9fr\]/.test(page),
  },
  {
    id: "2d",
    name: "placeholder hook for the future image is present and identifiable",
    pass:
      /HERO_IMAGE_SRC\s*=\s*"\/hero\.jpg"/.test(page) &&
      /data-hero-image-src=\{HERO_IMAGE_SRC\}/.test(page),
  },
];

let failed = 0;
console.log("Plan step 2 — structural confirmation:");
for (const { id, name, pass } of checks) {
  const status = pass ? "PASS" : "FAIL";
  console.log(`  (${id}) ${status}: ${name}`);
  if (!pass) failed++;
}

if (failed > 0) {
  console.error(`\n${failed} structural check(s) failed.`);
  process.exit(1);
}

console.log(`\nAll plan step 2 structural checks passed (${checks.length}/${checks.length}).`);