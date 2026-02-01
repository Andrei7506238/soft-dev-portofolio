export function Footer() {
  const year = new Date().getFullYear()

  const backToTop = () => {
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="footer" role="contentinfo" aria-label="Footer" style={{ borderTop: "1px solid #e6e6e6", padding: "1.25rem 1rem" }}>
      <div style={{ maxWidth: 980, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
        <div>
          <small style={{ color: "var(--muted, #666)" }}>© {year} Andrei‑Robert Popa</small>
        </div>

        <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
          <a href="https://www.linkedin.com/in/andrei-robert-popa/">Contact</a>
          <a href="https://github.com/Andrei7506238" target="_blank" rel="noopener noreferrer">GitHub</a>
          <button onClick={backToTop} aria-label="Back to top" style={{ background: "none", border: "none", padding: 0, cursor: "pointer", color: "inherit" }}>Top</button>
        </div>
      </div>
    </footer>
  )
}
