import React from "react";

const Cube = ({
  id,
  ref,
}) => {
  return (
    <div id={id} ref={ref} className="cube">
      <div className="face face-1">
        <span className="line line-top"></span>
        <span className="line">
          <div className="circle"></div>
        </span>
        <span className="line line-bottom"></span>
      </div>
      <div className="face face-4">
        <span className="line line-top">
          <div className="circle"></div>
          <div className="circle"></div>
        </span>
        <span className="line"></span>
        <span className="line line-bottom">
          <div className="circle"></div>
          <div className="circle"></div>
        </span>
      </div>
      <div className="face face-6">
        <span className="line line-top">
          <div className="circle"></div>
          <div className="circle"></div>
        </span>
        <span className="line">
          <div className="circle"></div>
          <div className="circle"></div>
        </span>
        <span className="line line-bottom">
          <div className="circle"></div>
          <div className="circle"></div>
        </span>
      </div>
      <div className="face face-2">
        <span className="line line-top">
          <div className="circle"></div>
        </span>
        <span className="line"></span>
        <span className="line line-bottom">
          <div className="circle"></div>
        </span>
      </div>
      <div className="face face-3">
        <span className="line line-top">
          <div className="circle"></div>
        </span>
        <span className="line">
          <div className="circle"></div>
        </span>
        <span className="line line-bottom">
          <div className="circle"></div>
        </span>
      </div>
      <div className="face face-5">
        <span className="line line-top">
          <div className="circle"></div>
          <div className="circle"></div>
        </span>
        <span className="line">
          <div className="circle"></div>
        </span>
        <span className="line line-bottom">
          <div className="circle"></div>
          <div className="circle"></div>
        </span>
      </div>
    </div>
  );
}

export default Cube;
