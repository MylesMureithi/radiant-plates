import "./About.css";

const history = [
  "Add a story of how Radiant Plates began: who started it, when, and why.",
  "Another paragraph here if more.",
];

const stories = [
  { id: 1, title: "Story title", text: "Add something we've done, an accomplishment, or a moment worth sharing." },
];

const team = [
  { id: 1, name: "Team member", role: "Role", image: null },
  { id: 2, name: "Team member", role: "Role", image: null },
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
          <div className="about-history history-card">
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
                  <div className="team-avatar" aria-hidden="true" />
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