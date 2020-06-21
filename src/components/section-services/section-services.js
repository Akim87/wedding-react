import React from "react";
import "./section-services.scss";
import ServiceCard from "../service-card/service-card";

function SectionServices(props) {
  const { data } = props;

  return (
    <section className="base-section services" id="services">
      <h2 className="section-heading wow fadeInDown" data-wow-delay="0.1s">
        {data.meta.title}
      </h2>
      <p className="section-description wow fadeInDown" data-wow-delay="0.3s">
        {data.meta.description}
      </p>
      {!props.isUserLogined && (
        <button
          className="btn-main section-edit-button"
          onClick={() => props.togglePopup("editor", "service")}
        >
          Edit
        </button>
      )}
      <div className="services__inner d-flex justify-between">
        {data.content.map((item, index) => (
          <ServiceCard data={item} key={index} />
        ))}
      </div>
    </section>
  );
}

export default SectionServices;
