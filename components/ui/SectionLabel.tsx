export function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <div className="mb-10 flex items-center gap-4">
      <span className="font-mono text-xs text-signal">{index}</span>
      <span className="h-px flex-1 max-w-8 bg-base-border" />
      <span className="font-mono text-xs uppercase tracking-widest2 text-ink-muted">
        {label}
      </span>
      <span className="h-px flex-1 bg-base-border" />
    </div>
  );
}
