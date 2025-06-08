import React from "react";

const Testimonials = () => {
  return (
    <section id="testimonials">
     <section id="testimonials" className="testimonials"></section>    
      <h2 className="heading">Testimonials</h2>
      <div className="testimonials-container">
        <div className="testimonial-card">
          <img src="/sandeep.jpg" alt="User 1" className="testimonial-img" />
          <h3 className="testimonial-name">Mopuri Sandeep</h3>
          <p className="testimonial-role">Beginner Rider</p>
          <p className="testimonial-text">
            "When I first started horse riding, I was quite nervous and unsure if I could ever feel comfortable on a horse. But the instructors here made all the difference—they were patient, knowledgeable, and always encouraging. Each lesson was carefully structured to build my confidence step by step. Now, I can ride confidently and even trot on my own. This experience has been truly life-changing
          </p>
        </div>
        <div className="testimonial-card">
          <img src="/img2.jpg" alt="User 2" className="testimonial-img" />
          <h3 className="testimonial-name">Kantumutchu Bharath</h3>
          <p className="testimonial-role">Intermediate Rider</p>
          <p className="testimonial-text">
            "The training program is exceptional, focusing not only on riding skills but also on horse care and safety, which gave me a holistic understanding of horsemanship. The horses are incredibly well cared for, calm, and responsive, which made learning enjoyable and safe. Thanks to this school, I was able to improve my posture and riding technique significantly, and I look forward to every session."
          </p>
        </div>
        <div className="testimonial-card">
          <img src="/sampath.jpg" alt="User 3" className="testimonial-img" />
          <h3 className="testimonial-name">G Sampath </h3>
          <p className="testimonial-role">Advance Rider</p>
          <p className="testimonial-text">
            "After years of casual riding, I wanted to refine my skills and compete at a higher level. The personalized coaching and advanced lessons here helped me achieve that goal. The trainers have deep expertise and tailored the training to my individual strengths and weaknesses. Their feedback was honest and constructive, pushing me to improve while ensuring safety. Thanks to their guidance, I recently competed in my first local show with great results"
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
