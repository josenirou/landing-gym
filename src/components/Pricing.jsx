import Card from "./Card";

const plans = [
  {
    title: "Básico",
    price: "$20.000",
    period: "/mes",
    features: ["Acceso al gimnasio", "Horarios estándar", "Soporte en sala"],
    ctaText: "Elegir Básico",
  },
  {
    title: "Pro",
    price: "$35.000",
    period: "/mes",
    features: [
      "Acceso + Clases grupales",
      "Horarios extendidos",
      "Asesoría mensual",
    ],
    ctaText: "Elegir Pro",
  },
  {
    title: "Premium",
    price: "$50.000",
    period: "/mes",
    features: ["Todo incluido", "Entrenador personal", "Evaluación corporal"],
    ctaText: "Elegir Premium",
  },
  {
    title: "Básico",
    price: "$204.000",
    period: "/año (15%OFF)",
    features: ["Todo incluido", "Entrenador personal", "Evaluación corporal"],
    ctaText: "Elegir Premium",
  },
  {
    title: "Pro",
    price: "$336.000",
    period: "/anual",
    features: ["Todo incluido", "Entrenador personal", "Evaluación corporal"],
    ctaText: "Elegir Premium",
  },
  {
    title: "Premium",
    price: "$400.000",
    period: "/anual",
    features: ["Todo incluido", "Entrenador personal", "Evaluación corporal"],
    ctaText: "Elegir Premium",
  },
];

function Pricing() {
  return (
    <>
      <section id="pricing" className="section section--pricing">
        <div className="container">
          <header className="section-head">
            <h2>PLANES</h2>
            <p className="muted">ELIGE EL PLAN QUE VA CONTIGO.</p>
            <span className="bar" />
          </header>

          <div className="pricing-grid">
            {plans.map((p) => (
              <Card key={p.title} {...p} />
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

export default Pricing;
