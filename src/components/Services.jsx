import musc from "../assets/images/musculacion.png";
import spin from "../assets/images/spinning.png";
import tae from "../assets/images/taekwon-do.png";
import aero from "../assets/images/aerobox.png";
import gap from "../assets/images/gap.png";
import hiit from "../assets/images/hiit.png";

function Services() {
  const services = [
    {
      emoji: "🏋️",
      title: "Musculación",
      desc: "Dos pisos con máquinas, mancuernas y barras, más asistentes que te orientan.",
      img: musc,
    },
    {
      emoji: "🚴",
      title: "Spinning",
      desc: "Ciclismo indoor con música enérgica para mejorar resistencia.",
      img: spin,
    },
    {
      emoji: "🥋",
      title: "Taekwon-do",
      desc: "Arte marcial coreano que combina defensa personal y disciplina.",
      img: tae,
    },
    {
      emoji: "🥊",
      title: "Aerobox",
      desc: "Entrenamiento aeróbico inspirado en boxeo, cardio y coordinación.",
      img: aero,
    },
    {
      emoji: "🍑",
      title: "GAP",
      desc: "Tonifica glúteos, abdomen y piernas con rutinas focalizadas.",
      img: gap,
    },
    {
      emoji: "⚡",
      title: "HIIT",
      desc: "Intervalos de alta intensidad para acelerar el metabolismo.",
      img: hiit,
    },
  ];

  return (
    <>
      <section id="services" className="section section--services">
        <div className="container">
          <header className="section-head">
            <h2>NUESTROS SERVICIOS</h2>
            <p className="muted">OPCIONES PARA TODOS LOS GUSTOS Y NIVELES.</p>
            <span className="bar" />
          </header>

          <div className="services-grid">
            {services.map((s) => (
              <div
                key={s.title}
                className="service"
                style={{ "--bg": `url(${s.img})` }}
              >
                <span className="service-emoji">{s.emoji}</span>
                <h3 className="service-title">{s.title}</h3>
                <p className="service-desc muted">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="divider">
        <span></span>
      </div>
    </>
  );
}

export default Services;
