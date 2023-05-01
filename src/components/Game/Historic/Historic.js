import React from "react";

const Historic = ({
  historic,
}) => {
  return (
    <div id="historic">
      <div className="items">
        {
          (historic || []).slice(0).reverse().map((item, index) => (
            <div key={index} className={`item ${item.result}`}>
              <span>
                <p>{item.bet}</p>
                <p>-</p>
                <p>{item.cubes[1]}</p>
                <p>-</p>
                <p>{item.cubes[2]}</p>
              </span>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Historic;
