import React, { useMemo } from "react";

import config from "../../config/config.json";

import icon_module_1 from "../../img/icon_module_1.svg";

const Home = ({
  onChangeModule,
}) => {
  const iconModule = useMemo(() => {
    return icon_module_1;
  }, []);

  return (
    <div id="home">
      <div>
        {
          config.modules.map((item) => (
            <div
              key={item.id}
              className={`module${item.disabled ? " disabled" : ""}`}
              onClick={() => !item.disabled ? onChangeModule(item.id) : {}}
            >
              {item.icon &&
                <img src={iconModule} />
              }
              <h1>{item.name}</h1>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Home;
