import React, { useRef, useState, useEffect } from "react";
import { slider } from "../data";
import { GoArrowSmallRight } from "react-icons/go";

import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
const Hero = () => {
  const [current, setCurrent] = useState(0);
  const time = useRef(null);
  const length = slider.length;
  const person = slider[current];
  const checkNumber = (number) => {
    if (number < 0) {
      let newNumber = length - 1;
      return newNumber;
    }

    if (number > length - 1) {
      let newNumber = 0;
      return newNumber;
    }
    return number;
  };

  const prev = () => {
    if (time.current) {
      clearTimeout(time.current);
    }
    setCurrent((current) => {
      let newCurr = current - 1;

      return checkNumber(newCurr);
    });
  };

  const next = () => {
    if (time.current) {
      clearTimeout(time.current);
    }
    setCurrent((current) => {
      let newCurr = current + 1;
      return checkNumber(newCurr);
    });
  };

  const { id, title, price, img, alt, path, label } = person;
  useEffect(() => {
    const set = () => {
      next();
    };

    time.current = setTimeout(set, 3000);
    return function () {
      if (time.current) {
        clearTimeout(time.current);
      }
    };
  }, [current, length]);
  return (
    <section className="hero-section">
      <div className="wrapper">
        {/* {slider.map((item) => {
          const { id, title, price, img, alt, path, label } = item;
          return ( */}
        <div className="hero-slide" key={id}>
          <div className="hero-slider">
            <img className="slide-img" src={img} alt={alt} />
            <div className=" container">
              <div className="row">
                <div className="col-12 col-md-10 mx-auto">
                  <div className="slide-content">
                    <h1>{title}</h1>
                    <p>{price}</p>
                    <button className="hero-btn" to={path}>
                      {label}
                      <GoArrowSmallRight className="hero-arrw" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*    );
        })} */}
        <div className="slide-btn">
          <IoIosArrowDropleft className="prev" onClick={() => prev()} />
          <IoIosArrowDropright className="next" onClick={() => next()} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
