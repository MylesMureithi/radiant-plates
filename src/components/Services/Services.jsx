import { FaAppleAlt, FaHandshake, FaUtensils } from "react-icons/fa";
import "./Services.css";

const services = [
  {
    id: 1,
    title: "Feeding Programmes",
    Icon: FaAppleAlt,
    description: "Add a short description: who the programme serves and how it runs.",
  },
  {
    id: 2,
    title: "Family Reconciliations",
    Icon: FaHandshake,
    description: "Add a short description: how the process works and who it's for.",
  },
  {
    id: 3,
    title: "Meal Prep via Community Kitchen",
    Icon: FaUtensils,
    description: "Add a short description: what's prepared, for whom, and how people can take part.",
  },
];

function Services() {
  return (
    <section className="section section-alt" id="services">
      <div className="section-inner">
        <div className="section-header">
          <p className="section-eyebrow">Services</p>
          <h2 className="section-title">How we serve our community</h2>
        </div>

        <div className="services-grid">
          {services.map(({ id, title, Icon, description }) => (
            <article key={id} className="card service-card">
              <Icon size={28} aria-hidden="true" />
              <h3 className="service-title">{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;