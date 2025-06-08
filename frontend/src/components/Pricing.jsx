import { Check } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const pricing = [
    {
      imgUrl: "/pricing.jpg",
      title: "QUARTERLY",
      price: 5000,
      length: 3,
    },
    {
      imgUrl: "/pricing.jpg",
      title: "HALF_YEARLY",
      price: 8000,
      length: 6,
    },
    {
      imgUrl: "/pricing.jpg",
      title: "YEARLY",
      price: 12000,
      length: 12,
    },
  ];

  return (
    <section id="pricing" className="pricing">
      <h1>PREMIER RIDER PACKAGES</h1>
      <div className="wrapper">
        {pricing.map((element) => (
          <div className="card" key={element.title}>
            <img src={element.imgUrl} alt={element.title} />
            <div className="title">
              <h1>{element.title}</h1>
              <h1>PACKAGE</h1>
              <h3>Rs {element.price}</h3>
              <p>For {element.length} Months</p>
            </div>
            <div className="description">
              <p><Check /> Grooming, Tack, and Stable Access</p>
              <p><Check /> Comprehensive Riding & Training Program</p>
              <p><Check /> Unlimited Daily Riding Access</p>
              <p><Check /> 24/7 Rider Support & Mentorship</p>
              <p><Check /> 20-Day Pause Option</p>
              <Link to="/">Join Now</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
