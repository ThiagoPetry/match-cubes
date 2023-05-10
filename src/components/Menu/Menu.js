import React from "react";

import Icon from "../Icon/Icon.js";

import config from "../../config/config.json";

const Menu = ({
  module,
  onChangeModule,
}) => {
  return (
    <div id="menu">
      {
        config.menu.map((item) => {
          const selected = !item.reference && item.id == module ? "item selected" : "item";

          return (
            <div
              key={item.id}
              className={selected}
              onClick={() => onChangeModule(item.id)}
            >
              <Icon icon={item.icon} />
              <p>{item.name}</p>
            </div>
          );
        })
      }
    </div>
  );
}

export default Menu;
