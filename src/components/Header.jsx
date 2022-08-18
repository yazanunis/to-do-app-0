import { Link } from "react-router-dom"

const Header = () => {
  return (
    <nav className="nav justify-content-center bg-info position-relative">
      <h1 className="nav-item text-dark">To Do App</h1>
      <Link
        to="/about"
        className="position-absolute top-50 end-0 translate-middle"
      >
        About
      </Link>
    </nav>
  )
}

export default Header
