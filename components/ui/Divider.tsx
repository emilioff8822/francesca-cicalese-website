export default function Divider() {
  return (
    <div className="w-full max-w-[80%] mx-auto">
      <div
        className="h-px"
        style={{ background: "linear-gradient(to right, transparent, var(--color-border) 20%, var(--color-border) 80%, transparent)" }}
      />
    </div>
  )
}
