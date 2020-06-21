import React from "react";
import "./popup.scss";

function Popup(props) {
  return (
    <div className="popup">
      <div className="popup__inner">
        {props.children}
      </div>
    </div>
  );
}

export default Popup;
