import React from "react";
import "./coach-card.scss";
import coach1 from "../../assets/coach1.jpg";

function CoachCard(props) {

  return (
    <div
      className="base-card coaches__item coach-card d-flex wow fadeInUp"
      data-wow-delay="0.5s"
    >
      <img
        className="coach-card__img"
        src={coach1}
        alt="Coach"
        loading="lazy"
      />
      <div className="coach-card__info d-flex flex-column">
        <span className="coach-card__number">01</span>
        <h3 className="base-heading-sm coach-card__name">{props.data.name}</h3>
        <span className="coach-card__position">{props.data.direction}</span>
        <ul className="base-text coach-card__list">
          <li className="coach-card__list-item">
            <span className="blurred">Work experience </span>
            {props.data.workExperience}
          </li>
          <li className="coach-card__list-item">
            <span className="blurred">Teacher for </span>
            {props.data.teachExperience}
          </li>
          <li className="coach-card__list-item">
            <span className="blurred">Style </span>
            <span>{props.data.style.map((item) => item)}</span>
          </li>
        </ul>
        <button className="btn-accent coach-card__btn">Let’s start</button>
        <button className="btn-accent coach-card__btn--mob" />
      </div>
    </div>
  );
}

export default CoachCard;
