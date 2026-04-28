export default function MetricChip({ label }: { label: string }) {
  return (
    <span
      className="metric-chip inline-flex items-center gap-2 rounded-full px-4 py-2"
      style={{
        background: "#FFFFFF",
        border: "1px solid #E3E2F5",
        fontSize: "0.6875rem",
        fontWeight: 500,
        letterSpacing: "0.06em",
        color: "var(--text-soft)",
      }}
    >
      <span
        style={{
          display: "inline-block",
          width: "5px",
          height: "5px",
          borderRadius: "50%",
          background: "var(--violet)",
          flexShrink: 0,
        }}
      />
      {label}
    </span>
  );
}
