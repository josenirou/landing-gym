import stiltLogo from "../assets/images/stilt_logo.png";
function Header() {
  return (
    <header className="header">
      <img src={stiltLogo} alt="Stilt House" />
      <nav>
        <ul>
          <li>INICIO</li>
          <li>PLANES</li>
          <li>CONTACTO</li>
          <button className="login-btn">Iniciar Sesion</button>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
