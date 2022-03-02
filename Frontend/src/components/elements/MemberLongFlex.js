import React from "react";

import "../../assets/css/text.css";
import "../../assets/css/pages.css";
import "../../assets/css/elements/memberLongFlex.css";

export default function MemberLongFlex(props) {
  return (
    <div className="mb-long-flex">
      <div>
        <div className="mb-long-temp-img" />
      </div>

      <div className="mb-long-flex-box">
        <div
          className={`mb-long-tag ${
            props.color === "red" && "mb-long-red-tag"
          } ${props.color === "blue" && "mb-long-blue-tag"} ${
            props.color === "grey" && "mb-long-grey-tag"
          }`}
        />
        <h1 className="vsm-text w500 sarabun">ชื่อ-นามสกุล</h1>
        <h1 className="vsm-text w500 sarabun">ตำแหน่ง</h1>
        <h1 className="vsm-text w500 sarabun">Email ติดต่อ</h1>
      </div>
    </div>
  );
}
