import Card from "./Card";
import no_image from "../assets/images/no_image.png";

const servicesData = [
  {
    titulo: "🏋️ MUSCULACIÓN",
    img: no_image,
    alt: "1",
    descripcion:
      "Dos pisos equipados con máquinas de pesas, mancuernas y barras, más asistentes que orientan tu entrenamiento para sacar el máximo provecho.",
  },
  {
    titulo: "🚴 SPINNING",
    img: no_image,
    alt: "1",
    descripcion:
      "Clases de ciclismo indoor con música enérgica, ideales para mejorar la resistencia cardiovascular y quemar calorías.",
  },
  {
    titulo: "🥋 TAEKWON-DO",
    img: no_image,
    alt: "1",
    descripcion:
      "Arte marcial coreano que combina defensa personal, disciplina y trabajo físico intenso.",
  },
  {
    titulo: "🥊 AEROBOX",
    img: no_image,
    alt: "1",
    descripcion:
      "Entrenamiento aeróbico inspirado en el boxeo, que mezcla cardio, coordinación y liberación de estrés.",
  },
  {
    titulo: "🍑 GAP",
    img: no_image,
    alt: "1",
    descripcion:
      "Rutinas focalizadas para tonificar glúteos, abdomen y piernas, mejorando fuerza y resistencia localizada.",
  },
  {
    titulo: "⚡ HIIT",
    img: no_image,
    alt: "1",
    descripcion:
      "Sesiones de intervalos cortos e intensos, perfectos para acelerar el metabolismo y mejorar el rendimiento.",
  },
];

function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <h2 className="section-title">NUESTROS SERVICIOS</h2>
        <p className="section-subtitle">
          Entrena con clases guiadas y equipamiento de primer nivel.
        </p>
        <span className="bar" />
        <div className="grid">
          {servicesData.map((service, index) => (
            <Card
              key={index}
              titulo={service.titulo}
              img={service.img}
              alt={service.alt}
              descripcion={service.descripcion}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
