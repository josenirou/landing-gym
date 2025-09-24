import img_hero from "../assets/images/img_hero.jpg";
function Hero() {
  return (
    <div className="hero">
      <img src={img_hero} alt="" />
      <div className="container">
        <h1 className="titulo1">
          <span className="accent">Transforma </span> tu cuerpo
        </h1>
        <h1 className="titulo2">
          Transforma <span className="accent">tu vida</span>
        </h1>
      </div>
    </div>
  );
}

export default Hero;
