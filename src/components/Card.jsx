import no_image from "../assets/images/no_image.png";
function Card({ titulo, img, alt, descripcion }) {
  return (
    <article className="card">
      <img src={img} alt={alt} className="card_img" />
      <h3>{titulo}</h3>
      <p className="muted">{descripcion}</p>
    </article>
  );
}

export default Card;
