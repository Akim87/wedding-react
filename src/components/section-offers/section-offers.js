import React from "react";
import "./section-offers.scss";

function SectionOffers(props) {
  const { data } = props;

  const offersItem = data.content.map((item, index) => (
    <div
      className="offer__item d-flex align-center flex-column wow fadeInUp"
      data-wow-delay="0.4s"
      key={index}
    >
      <i className="icon icon-coaches offer__icon" />
      <span className="offer__description">{item.title}</span>
    </div>
  ));

  return (
    <section className="base-section offer" id="offer">
      <h2 className="section-heading wow fadeInDown" data-wow-delay="0.1s">
        {data.meta.title}
      </h2>
      <p className="section-description wow fadeInDown" data-wow-delay="0.3s">
        {data.meta.description}
      </p>
      <div className="offer__inner d-flex">
        {offersItem}
      </div>
    </section>
  );
}

export default SectionOffers;
