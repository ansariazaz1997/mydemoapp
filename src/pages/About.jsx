import React from 'react';

const About = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <h1 className="about-title">About Us</h1>
        <p className="about-subtitle">
          We’re a passionate team building innovative solutions for real-world problems.
        </p>
      </section>

      {/* Mission Section */}
      <section className="about-section">
        <h2 className="section-title">Our Mission</h2>
        <p className="section-text">
          Our mission is to empower businesses and individuals through modern, scalable technology.
          We believe in creating impact-driven solutions that are simple, powerful, and accessible to all.
        </p>
      </section>

      {/* Team Section */}
      <section className="about-section">
        <h2 className="section-title">Meet the Team</h2>
        <div className="team-grid">
          {["Alex", "Jamie", "Taylor"].map((name) => (
            <div className="team-member" key={name}>
              <div className="team-photo" />
              <h3 className="team-name">{name}</h3>
              <p className="team-role">Role Title</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
