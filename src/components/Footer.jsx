import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";
function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="brand-col">
          <h3 className="footer-brand">STILT HOUSE GYM</h3>
          <p className="muted">Entrena con pasión, vive con energía.</p>
        </div>

        <nav className="footer-nav">
          <a href="#services">Servicios</a>
          <a href="#pricing">Planes</a>
          <a href="#contact">Contacto</a>
        </nav>

        <div className="social">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram size={22} />
          </a>
          <a
            href="https://wa.me/56911111111"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp size={22} />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <FaFacebook size={22} />
          </a>
        </div>
      </div>

      <div className="footnote">
        <div className="container">
          <small className="muted">
            © {new Date().getFullYear()} Stilt House Gym · Todos los derechos
            reservados
          </small>
          <small className="muted">Desarrollador José Guanel </small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
