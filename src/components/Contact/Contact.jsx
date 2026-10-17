import { FaRegEnvelope, FaWhatsapp, FaInstagram } from "react-icons/fa";
import "./Contact.css";

const contacts = [
  {
    id: 1,
    label: "WhatsApp",
    value: "+000 00 000 0000",
    href: "https://wa.me/00000000000",
    Icon: FaWhatsapp,
  },
  {
    id: 2,
    label: "Instagram",
    value: null,
    href: null,
    Icon: FaInstagram,
  },
  {
    id: 3,
    label: "Email Us",
    value: "info@radiantplates.org",
    href: "mailto:info@radiantplates.org",
    Icon: FaRegEnvelope,
  },
];

function Contact() {
  return (
    <section className="section section-alt" id="contact">
      <div className="section-inner">
        <div className="section-header">
          <p className="section-eyebrow">Contact</p>
          <h2 className="section-title">Get in touch</h2>
          <p className="section-sub">
            Questions, partnerships, or ways to get involved. We'd love to hear from you.
          </p>
        </div>

        <div className="contact-grid">
          {contacts.map(({ id, label, value, href, Icon }) => (
            <a
              key={id}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="card contact-card"
            >
              <span className="contact-icon">
                <Icon size={22} aria-hidden="true" />
              </span>
              <span className="contact-text">
                <span className="contact-label">{label}</span>
                <span className="contact-value">{value}</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;