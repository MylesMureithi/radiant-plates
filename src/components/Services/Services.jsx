import { RiBowlFill } from "react-icons/ri";
import { FaHandshake, FaUtensils } from "react-icons/fa";
import { HiLightBulb } from "react-icons/hi";
import "./Services.css";

const services = [
  {
    id: 1,
    title: "Feeding Programmes",
    Icon: RiBowlFill,
    description:
      "Regular, shared meals for families and individuals who need them, prepared with care and served with dignity. Get in touch to find out how to take part.",
  },
  {
    id: 2,
    title: "Family Reintegrations",
    Icon: FaHandshake,
    description:
      "Patient, confidential support that helps people return to their families and communities, with guidance for everyone involved along the way.",
  },
  {
    id: 3,
    title: "Raising Awareness",
    Icon: HiLightBulb,
    description:
      "Sharing the stories and realities behind hunger and family separation through outreach and community conversations, so more people understand the need and how to help.",
  },
  {
    id: 4,
    title: "Meal Prep via Community Kitchen",
    Icon: FaUtensils,
    description:
      "Meals prepared in bulk in a shared kitchen, where volunteers and community members cook, learn, and eat together.",
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