import "./Hero.css";

// When you have an image, import it and assign it here:
// import heroImage from "../../assets/hero.jpg";
const heroImage = null;

function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <p className="hero-eyebrow">Welcome to Radiant Plates</p>
        <h1 className="hero-heading">Providing one meal at a time.</h1>
        <p className="hero-sub">
          To provide nutritious meals through community-driven food programs to empower vulnerable children, encourage family reintegration and raise awareness.
        </p>

        <div className="hero-actions">
          <a href="#services" className="hero-btn hero-btn-primary">
            Explore Services
          </a>
          <a href="#about" className="hero-btn hero-btn-secondary">
            About Us
          </a>
        </div>
      </div>

      <div className="hero-media">
        {heroImage ? (
          <img
            src={heroImage}
            alt="Describe the image here"
            className="hero-image"
          />
        ) : (
          <div className="hero-placeholder" aria-hidden="true">
            Image coming soon
          </div>
        )}
      </div>
    </section>
  );
}

export default Hero;
