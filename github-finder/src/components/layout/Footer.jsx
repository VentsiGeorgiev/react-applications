import './Footer.css'

function Footer() {
  const footerYear = new Date().getFullYear()
  return (
    <footer >
      <div className="container credits">
        &copy; All Rights Reserved  {footerYear}
      </div>
    </footer>
  )
}
export default Footer