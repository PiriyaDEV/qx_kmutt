import React from "react";

import "../../assets/css/elements/memberFlex.css";

export default function MemberFlex(props) {
  const linkPath = (path) => {
    window.location.href = path;
  };

  return (
    <div
      onClick={() => linkPath("/member-info/" + props.data.slug)}
      className="member-flex"
    >
      <div className="section">
        <img
          className={`member-clr ${
            props.data.role === "RESEARCHER" ? "red-flex" : "blue-flex"
          }`}
          src={props.data.profile_pic}
        />
      </div>
      <div className="member-flex-info">
        <h1 className="vsm-text w700">
          {props.data.firstname} {props.data.lastname}
        </h1>
        <div className="member-flex-tags-container">
          {props &&
            props.data.interests.slice(0, 2).map((interest, index) => (
              <div
                key={index}
                className={`xm3-text w400 member-flex-tags clamp-1 ${
                  props.data.role === "RESEARCHER" ? "red-flex" : "blue-flex"
                }`}
              >
                {interest.name}
              </div>
            ))}
        </div>
      </div>
      <div />
    </div>
  );
}
