function Card({ title, price, period, features = [], ctaText, ctaHref = "#" }) {
  return (
    <article className="price-card">
      <h3 className="price-title">{title}</h3>

      <div className="price">
        <strong>{price}</strong>
        <span className="period">{period}</span>
      </div>

      <ul className="features">
        {features.map((f, i) => (
          <li key={i}>✅ {f}</li>
        ))}
      </ul>

      {ctaText && (
        <a href={ctaHref} className="btn price-cta">
          {ctaText}
        </a>
      )}

      <small className="help muted">Sin matrícula · Cancela cuando quieras</small>
    </article>
  );
}
export default Card;
