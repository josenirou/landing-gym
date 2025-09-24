import stiltLogo from "../assets/images/stilt_logo.png";
function Header() {
  return (
    <header className="header">
      <img src={stiltLogo} alt="Stilt House" className="img_hero" />
      <nav>
        <ul>
          <li>
            <a href="">INICIO</a>
          </li>
          <li>
            <a href="">PLANES</a>
          </li>
          <li>
            <a href="">CONTACTO</a>
          </li>
          <button className="login-btn">INICIAR SESIÓN</button>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
