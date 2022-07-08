import React from "react";

import "../../assets/css/text.css";
import "../../assets/css/pages.css";
import "../../assets/css/elements/memberLongFlex.css";

import globe from "../../assets/images/icon/globe.svg";
import heart from "../../assets/images/icon/heart.svg";
import rocket from "../../assets/images/icon/rocket.svg";

export default function MemberLongFlex(props) {
  return (
    <div className="mb-long-flex">
      <div className="section member-long-clr-container">
        <img
          className={`member-long-clr ${
            props.data.role === "RESEARCHER" && "red-flex"
          } ${props.data.role === "CURRENT_MEMBER" && "blue-flex"} ${
            props.data.role === "OLD_MEMBER" && "black-flex"
          }`}
          src={props.data.profile_pic}
          alt=""
        />
      </div>

      <div className="mb-long-flex-box">
        <div
          className={`mb-long-tag section xm3-text white-text w700 ${
            props.data.role === "RESEARCHER" && "mb-long-red-tag"
          } ${props.data.role === "CURRENT_MEMBER" && "mb-long-blue-tag"} ${
            props.data.role === "OLD_MEMBER" && "mb-long-grey-tag"
          }`}
        >
          {props.data.role === "RESEARCHER" && "นักวิจัย"}
          {props.data.role === "CURRENT_MEMBER" && "สมาชิกปัจจุบัน"}
          {props.data.role === "OLD_MEMBER" && "สมาชิกเก่า"}
        </div>
        <h1 className="vsm-text w700 sarabun">
          {props.data.firstname} <br /> {props.data.lastname}
        </h1>
        <div className="member-icon-div">
          <div className="member-icon">
            <img src={rocket} alt="" />
            <p className="vsm-text w500 sarabun">{props.data.email}</p>
          </div>
{/* 
          {props.data.profile_url && ( */}
            <div className="member-icon">
              <img src={globe} alt="" />
              <p className="vsm-text w500 sarabun">{props.data.profile_url}</p>
            </div>
          {/* )} */}
          <div className="member-icon">
            <img src={heart} alt="" />
            {props.data &&
              props.data.interests.map((interest) => (
                <p className="xm-text w500 sarabun">{interest.name}</p>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
