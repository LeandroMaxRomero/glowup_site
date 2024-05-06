import { Link } from "react-router-dom"

Link
export const NavLinks = () => {
  return (
    <div className="container__navlinks">
        <a href="/#home">Home</a>
        <a href="/#services">Services</a>
        <a href="/#whyus">Why us?</a>
        <a href="/#testimonials">Testimonials</a>
        <a href="/#blogs">Blogs</a>
        <Link to="/form">Contact</Link>
    </div>
  )
}
