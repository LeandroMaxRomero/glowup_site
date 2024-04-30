import { Link } from "react-router-dom"

Link
export const NavLinks = () => {
  return (
    <div className="container__navlinks">
        <Link to="/">Home</Link>
        <Link to="/">Services</Link>
        <Link to="/">Why us?</Link>
        <Link to="/">Testimonials</Link>
        <Link to="/form">Blogs</Link>
        <Link to="/form">Contact</Link>
    </div>
  )
}
