import React from "react";
import "./service-card.scss";
import service1 from "../../assets/service1.jpg";

function ServicesCard(props) {

  return (
    <div
      className="base-card service-card services__item d-flex flex-column wow fadeInUp"
      data-wow-delay="0.5s"
    >
      <img
        className="service-card__img"
        src={service1}
        alt="For Bride and Groom"
        loading="lazy"
      />
      <div className="service-card__info">
        <h3 className="base-heading-sm service-card__heading">
          {props.data.title}
        </h3>
        <ul className="base-text">
          <li className="service-card__point">First Dance</li>
          <li className="service-card__point">Parent &amp; Child Dance</li>
        </ul>
      </div>
    </div>
  );
}

export default ServicesCard;
