import React from "react";
import "./section-coaches.scss";
import CoachCard from "../coach-card/coach-card";

function SectionCoaches(props) {
  const { data } = props;

  return (
    <section className="base-section coaches" id="coaches">
      <h2 className="section-heading wow fadeInDown" data-wow-delay="0.1s">
        {data.meta.title}
      </h2>
      <p className="section-description wow fadeInDown" data-wow-delay="0.3s">
        {data.meta.description}
      </p>
      <div className="coaches__inner d-flex">
        {data.content.map((item, index) => (
          <CoachCard data={item} key={index} />
        ))}
      </div>
      <div className="coaches__navigation d-flex justify-center">
        <span className="coaches__counter" />
      </div>
    </section>
  );
}

export default SectionCoaches;
