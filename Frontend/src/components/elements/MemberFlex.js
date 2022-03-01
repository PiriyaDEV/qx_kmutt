import React from "react";

import "../../assets/css/elements/memberFlex.css";

export default function MemberFlex(props) {
  return (
    <div className="member-flex">
      <div className="section">
        <div className={`${props.color === "red" ? "red-flex" : "blue-flex"}`} />
      </div>
      <div />
    </div>
  );
}
