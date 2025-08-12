export default function Loading() {
  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
        minHeight: "60vh",
        width: "100%",
      }}
    >
      <div
        aria-label="Loading"
        role="status"
        style={{
          width: 48,
          height: 48,
          borderRadius: "50%",
          border: "4px solid #e5e7eb",
          borderTopColor: "#111827",
          animation: "spin 1s linear infinite",
        }}
      />
      {/* Use inline animation name only; keyframes are provided globally in layout */}
    </div>
  );
}
