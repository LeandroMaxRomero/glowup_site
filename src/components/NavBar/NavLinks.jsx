import { Link } from "react-router-dom"

Link
export const NavLinks = () => {
  return (
    <div className="container__navlinks">
        <Link to="/">Link 1</Link>
        <Link to="/">Link 2</Link>
        <Link to="/">Link 3</Link>
        <Link to="/">Link 4</Link>
        <Link to="/form">Contact</Link>
    </div>
  )
}
