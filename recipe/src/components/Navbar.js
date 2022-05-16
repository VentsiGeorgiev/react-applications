import { Link } from 'react-router-dom'
import './Navbar.css'
export default function Navbar() {
  return (
    <div className="navbar">
      <nav className='container'>
        <div className="logo">
          <Link to="/">
            <h1 className='logo-title'>Recipes</h1>
          </Link>
        </div>

        <div className="links">
          <Link to="/create">Create Recipe 1</Link>
        </div>

      </nav>
    </div>
  )
}