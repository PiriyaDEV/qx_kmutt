import React from "react";

import "../../assets/css/elements/memberFlex.css";

export default function MemberFlex(props) {
  const linkPath = (path) => {
    window.location.href = path;
  };

  return (
    <div onClick={() => linkPath("/member-info/" + props.data.attributes.slug)} className="member-flex">
      <div className="section">
        <img className={`member-clr ${props.color === "red" ? "red-flex" : "blue-flex"}`} src="https://cpe.kmutt.ac.th/uploadFile/Staff/jaturon.jpg"/>
      </div>
      <div className="member-flex-info">
        <h1 className="vsm-text w700">{props.data.attributes.firstname} {props.data.attributes.lastname}</h1>
        <div className="member-flex-tags-container">
        {props && props.data.attributes.interests.data.slice(0, 2).map((interest, index) => (
          <div key={index} className={`xm3-text w400 member-flex-tags clamp-1 ${props.color === "red" ? "red-flex" : "blue-flex"}`}>{interest.attributes.name}</div>
        ))}
        </div>
      </div>
      <div />
    </div>
  );
}
