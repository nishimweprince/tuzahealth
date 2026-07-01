export function SectionHeader({
  eyebrow,
  title,
  description,
  centered = false,
  className,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}) {
  return (
    <div
      className={[
        centered ? "text-center" : "max-w-[640px]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="section-eyebrow">{eyebrow}</div>
      <h2 className="type-section mb-4">{title}</h2>
      {description ? <p className="type-body text-[16.5px]">{description}</p> : null}
    </div>
  );
}