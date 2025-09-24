import img_hero from "../assets/images/img_hero.jpg";
function Hero() {
  return (
    <div className="hero">
      <img src={img_hero} alt="Persona levantando peso" />
      <div className="container_hero">
        <h1 className="titulo1">
          <span className="accent">Transforma </span> tu cuerpo
        </h1>
        <h1 className="titulo2">
          Transforma <span className="accent">tu vida</span>
        </h1>
        <div class="cta">
          <a href="#Planes" class="btn">
            Ver planes
          </a>
          <a href="#Contacto" class="btn btn--ghost">
            Inscríbete
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
