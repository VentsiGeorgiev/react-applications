import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='nav'>
      <div className='container flex'>

        <div className='logo'>
          <FaGithub />
          <Link className='logo-name' to='/'>
            GitHub Finder
          </Link>
        </div>

        <div className='links'>
          <Link className='link' to='/'>Home</Link>
          <Link className='link' to='/about'>About</Link>
        </div>

      </div>
    </nav>
  )
}



export default Navbar