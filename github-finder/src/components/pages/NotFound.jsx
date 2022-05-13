import { Link } from "react-router-dom"

function NotFound() {
  return (
    <div className="not-found">
      <h1>404 - Page Not Found!</h1>
      <Link className="not-found-link" to="/">Back to Home Page</Link>
    </div>
  )
}
export default NotFound