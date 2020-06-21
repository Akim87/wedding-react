import React from "react";
import "./menu.scss";

function Menu(props) {
  const { data } = props;

  const navItems = data.content.map((item, index) => (
    <li className="menu__item" key={index}>
      <a href={item.url} className="menu__link">
        {item.title}
      </a>
    </li>
  ));

  return (
    <nav className="menu header__menu d-flex align-center justify-end">
      <h2 className="base-heading-xl menu__heading">Menu</h2>
      <ul className="menu__list d-flex justify-end">{navItems}</ul>
    </nav>
  );
}

export default Menu;
