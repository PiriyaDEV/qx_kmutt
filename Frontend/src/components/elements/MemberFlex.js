import React from "react";

import "../../assets/css/elements/memberFlex.css";

export default function MemberFlex(props) {
  const linkPath = (path) => {
    window.location.href = path;
  };

  return (
    <div onClick={() => linkPath("/member-info/" + props.data.attributes.slug)} className="member-flex">
      <div className="section">
        <div className={`${props.color === "red" ? "red-flex" : "blue-flex"}`} />
      </div>
      <div><h1>{props.data.attributes.email}</h1></div>
      <div />
    </div>
  );
}
