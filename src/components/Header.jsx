import stiltLogo from "../assets/images/stilt_logo.png";
function Header() {
  return (
    <header className="header">
      <img src={stiltLogo} alt="Stilt House" className="img_hero" />
      <nav>
        <ul>
          <li>
            <a href="#inicio">INICIO</a>
          </li>
          <li>
            <a href="#services">SERVICIOS</a>
          </li>
          <li>
            <a href="#pricing">PLANES</a>
          </li>
          <li>
            <a href="#contact">CONTACTO</a>
          </li>
          <button className="login-btn">INICIAR SESIÓN</button>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
