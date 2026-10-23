import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio message from ${formData.name}`
    );

    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href =
      `mailto:kanishthajain26@navgurukul.org?subject=${subject}&body=${body}`;
  }

  return (
    <section className="section-wrap contact-section" id="contact">
      <div className="section-heading">
        <p className="eyebrow">LET'S TALK</p>
        <h2>Get In <span>Touch</span></h2>
        <p className="section-description">
          Have a project idea or an opportunity? Feel free to contact me.
        </p>
      </div>

      <div className="contact-grid">
        <div className="contact-info">
          <article className="contact-card">
            <div className="contact-symbol">☎</div>
            <div>
              <h3>Phone</h3>
              <a href="tel:9039555225">9039555225</a>
            </div>
          </article>

          <article className="contact-card">
            <div className="contact-symbol">@</div>
            <div>
              <h3>Email</h3>
              <a href="mailto:kanishthajain26@navgurukul.org">
                kanishthajain26@navgurukul.org
              </a>
            </div>
          </article>

          <article className="contact-card">
            <div className="contact-symbol">⌖</div>
            <div>
              <h3>Location</h3>
              <p>Pune, Maharashtra, India</p>
            </div>
          </article>

          <article className="contact-card">
            <div className="contact-symbol">in</div>
            <div>
              <h3>LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/kanishtha-jain-45324a3b9/"
                target="_blank"
                rel="noreferrer"
              >
                View my profile ↗
              </a>
            </div>
          </article>

          <article className="contact-card">
            <div className="contact-symbol">{"</>"}</div>
            <div>
              <h3>GitHub</h3>
              <a
                href="https://github.com/kanishthajain26-sys"
                target="_blank"
                rel="noreferrer"
              >
                View my repositories ↗
              </a>
            </div>
          </article>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Send Me a Message</h3>

          <label htmlFor="contact-name">Your Name</label>
          <input
            id="contact-name"
            name="name"
            type="text"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="contact-email">Your Email</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="contact-message">Your Message</label>
          <textarea
            id="contact-message"
            name="message"
            placeholder="Write your message..."
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit" className="primary-btn">
            Open Email to Send ↗
          </button>

          <p className="contact-note">
            This form opens your email app with your message prepared.
            You will need to send the email yourself.
          </p>
        </form>
      </div>
    </section>
  );
}

export default Contact;
