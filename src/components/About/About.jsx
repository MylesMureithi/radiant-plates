import TeamMember1 from '../../assets/team/team-member-1.png'
import TeamMember2 from '../../assets/team/team-member-2.png'
import "./About.css";

const history = [
  "Radiant Plates began as a small group of neighbours sharing meals with families who needed them. What started with one pot and a handful of volunteers grew into a regular feeding programme.",
  "As we listened to the families we served, we saw that a meal was often only part of the need. Over time we added family reconciliation support and opened a community kitchen, where people cook, learn, and eat together.",
];

const stories = [
  {
    id: 1,
    title: "Our first community meal",
    text: "A few volunteers, one borrowed kitchen, and a table big enough for everyone who showed up. That first meal showed us how much a shared plate can mean.",
  },
  {
    id: 2,
    title: "Opening the community kitchen",
    text: "The kitchen gave us a permanent home for meal prep, so we could cook for more people and train volunteers who now run shifts of their own.",
  },
  {
    id: 3,
    title: "Families coming back together",
    text: "Through patient conversations and ongoing support, families that had drifted apart found their way back to the same table.",
  },
];

const team = [
  { id: 1, name: "Daisy Mwangi", role: "Founder", image: TeamMember1 },
  { id: 2, name: "Lenny Mwangi", role: "Co-Founder", image: TeamMember2 },
];

function About() {
  return (
    <section className="section" id="about">
      <div className="section-inner">
        <div className="section-header">
          <p className="section-eyebrow">About Us</p>
          <h2 className="section-title">The people and the story behind Radiant Plates</h2>
        </div>

        <div className="about-block">
          <h3 className="about-label">Our History</h3>
          <div className="about-history card">
            {history.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="about-block">
          <h3 className="about-label">Our Stories</h3>
          <div className="story-grid">
            {stories.map(({ id, title, text }) => (
              <article key={id} className="card">
                <h4 className="about-card-title">{title}</h4>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="about-block">
          <h3 className="about-label">The Team</h3>
          <div className="team-grid">
            {team.map(({ id, name, role, image }) => (
              <article key={id} className="card team-card">
                {image ? (
                  <img src={image} alt={name} className="team-avatar" />
                ) : (
                  <div className="team-avatar team-avatar-placeholder" aria-hidden="true" />
                )}
                <h4 className="about-card-title">{name}</h4>
                <p className="team-role">{role}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;