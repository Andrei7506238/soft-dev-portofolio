export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <p>© {year} Andrei-Robert Popa</p>
    </footer>
  )
}
