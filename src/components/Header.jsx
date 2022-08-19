import { Link } from "react-router-dom"

const Header = () => {
  return (
    <ul className="nav justify-content-center">
      <li className="nav-item">
        <Link to="/" className="nav-link">
          <h1 className="text-info">To Do App</h1>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/done" className="nav-link">
          <h1 className="text-dark">Done Tasks</h1>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/about" className="nav-link">
          <h1 className="text-dark">About</h1>
        </Link>
      </li>
    </ul>
  )
}

export default Header
