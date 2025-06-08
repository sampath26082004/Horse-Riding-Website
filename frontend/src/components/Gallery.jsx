import React from "react";

const Gallery = () => {
  const gallery = [
    "/img1.jpg",
    "/img2.jpg",
    "/img3.jpg",
    "/img4.jpg",
    "/img7.jpg",
    "/img8.jpg",
    "/img5.jpg",
    "/img6.jpg",
  ];

  return (
    <section id="gallery" className="gallery pt-24">
      <h1>MOMENTS IN MOTION</h1>
      <div className="images">
        <div>
          {gallery.slice(0, 3).map((element, index) => (
            <img key={index} src={element} alt="galleryImage" />
          ))}
        </div>
        <div>
          {gallery.slice(3, 5).map((element, index) => (
            <img key={index} src={element} alt="galleryImage" />
          ))}
        </div>
        <div>
          {gallery.slice(5, 8).map((element, index) => (
            <img key={index} src={element} alt="galleryImage" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
