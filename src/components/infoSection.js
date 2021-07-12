import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const InfoSection = ({ det }) => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);
  const { title, p1, p2, label, img, reverse, angle } = det;
  return (
    <section className="py-5 section">
      <div className="container">
        <div className="row">
          <div
            className={
              reverse
                ? "col-12 col-md-7 col-lg-7 order-last text-left text-center "
                : "col-12 col-md-7 col-lg-7 text-left text-center "
            }
          >
            <h1>{title}</h1>
            <p className="">{p1}</p>
            <p>{p2}</p>
            <button to="/home" className="hero-btn">
              {label}
            </button>
          </div>

          <div
            className="col-12 col-md-5 col-lg-5 py-3 py-md-0"
            data-aos={`fade-${angle}`}
            data-aos-offset="150"
            data-aos-easing="ease-in-sine"
          >
            <img src={img} alt={img} className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
