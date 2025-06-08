import React from "react";

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero pt-24">
      <div className="content">
        <div className="title">
          <h1>LET'S </h1>
          <h1>GETTING</h1>
          <h1>MOVING</h1>
        </div>
        <div className="sub-title">
          <p>Gain hands-on experience with </p>
          <p>horse riding & build connection</p>
          <p> with your horse.</p>
          <p>Your Journey to Elegance Begins Here.</p>
        </div>
        <div className="buttons">
          <button onClick={() => scrollToSection("contact")}>Start Your Journey</button>
          <button onClick={() => scrollToSection("pricing")}>Discover Your Plan</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
