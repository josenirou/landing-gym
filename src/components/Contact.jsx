function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <header className="section-head">
          <h2>CONTACTO</h2>
          <p className="muted">
            ¿TIENES DUDAS O QUIERES EMPEZAR HOY MISMO? DÉJANOS TU MENSAJE Y TUS
            DATOS Y NOS PONDREMOS EN CONTACTO CONTIGO.
          </p>
          <span className="bar" />
        </header>

        <form className="contact-form">
          <div className="field">
            <label htmlFor="name">NOMBRE</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Tu nombre"
              required
            />
          </div>
          <div className="field">
            <label htmlFor="email">EMAIL</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="tucorreo@ejemplo.com"
              required
            />
          </div>
          <div className="field">
            <label htmlFor="phone">Teléfono</label>
            <input
              id="phone"
              type="tel"
              name="phone"
              placeholder="+56 9 1234 5678"
              required
            />
          </div>
          <div className="field">
            <label htmlFor="message">MENSAJE</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Escribe tu mensaje..."
              required
            />
          </div>
          <button type="submit" className="btn">
            ENVIAR MENSAJE
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
