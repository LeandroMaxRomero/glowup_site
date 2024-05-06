import { Link } from "react-router-dom"

export const Footer = () => {
  return (
    <div className="container__footer">
      <div className="footer">

        <div className="footer__contact">
          <div className="footer__logo">
            <img src="./img/LogoFooter.svg" alt="Logo Footer" />
          </div>

          <h3>Contact</h3>

          <div className="footer__contact--links">
            <h4><span>Email:</span> glowup@address.com</h4>
            <h4><span>Phone number:</span> +1 12345 6789</h4>
          </div>

        </div>

        <div className="footer__nav">

          <h3>Navigation</h3>

          <div className="footer__nav--links">
            <a href="/#home">Home</a>
            <a href="/#services">Services</a>
            <a href="/#whyus">Why us?</a>
            <a href="/#testimonials">Testimonials</a>
            <a href="/#blogs">Blogs</a>
            <Link to="/form">Contact</Link>
          </div>


        </div>

        <div className="footer__social">

          <h3>Social Media</h3>

          <div className="footer__social--links">
            <a href="/">Instagram</a>
            <a href="/">LinkedIn</a>
            <a href="/">X (Twitter)</a>
            <a href="/">Facebook</a>
          </div>

        </div>

      </div>

      
    </div>
  )
}
