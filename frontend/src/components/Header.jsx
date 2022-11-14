import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="navbar bg-base-100">
      <div className="flex-1">
        <Link to='/' className="btn btn-ghost normal-case text-xl">Board Game Tracker</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to='/login'>
              <FaSignInAlt /> Login
            </Link>
          </li>
          <li>
            <Link to='/register'>
              <FaUser /> Register
            </Link>
          </li>
          <li><a>Logout</a></li>
        </ul>
      </div>
    </header>
    
  )
}

export default Header