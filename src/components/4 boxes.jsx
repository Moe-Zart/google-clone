import React from "react";

const Fourboxes = () => {
  return (
    <div className="box main-box">
      <p className="number">1</p>
      <div className="box box1 small">
        <p className="number">2</p>
        <div className="box box2 small">
          <p className="number">3</p>

          <div className="box box3 small">
            <p className="number">4</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fourboxes;
