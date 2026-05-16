import './Footer.css'

export function Footer() {
  const year = new Date().getFullYear()

  const backToTop = () => {
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="footer" role="contentinfo" aria-label="Footer">
      <div className="footer-inner">
        <div>
          <small className="footer-copy">© {year} Andrei-Robert Popa</small>
        </div>

        <div className="footer-links">
          <a href="https://www.linkedin.com/in/andrei-robert-popa/">Contact</a>
          <a href="https://github.com/Andrei7506238" target="_blank" rel="noopener noreferrer">GitHub</a>
          <button onClick={backToTop} aria-label="Back to top" className="footer-top">Top</button>
        </div>
      </div>
    </footer>
  )
}
