import React from "react";
import "./section-hero.scss";
import HeroBanner from '../../assets/first-dance-i.jpg'

function SectionHero(props) {
  const { data } = props

  return (
    <section className="hero base-section d-flex">
      <div className="hero__inner d-flex flex-column justify-center">
        <h1
          className="hero__heading base-heading-xl wow fadeInDown"
          data-wow-delay="0.1s"
        >
          {data.meta.title}
        </h1>
        <span
          className="hero__location base-heading-sm wow fadeIn"
          data-wow-delay="0.4s"
        >
          {data.meta.location}
        </span>
        <p className="base-text hero__info wow fadeIn" data-wow-delay="0.6s">
          {data.meta.description}
        </p>
        <button
          className="btn-accent hero__btn wow fadeInUp"
          data-wow-delay="0.8s"
        >
          Start
        </button>
      </div>
      <div className="hero__img-holder">
        <img
          src={HeroBanner}
          alt="First Dance"
          className="hero__img wow fadeIn"
          data-wow-delay="1.2s"
        />
      </div>
    </section>
  );
}

export default SectionHero;
