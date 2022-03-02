import React from "react";

import "../../assets/css/text.css";
import "../../assets/css/pages.css";
import "../../assets/css/pages/member.css";

import MemberLongFlex from "../elements/MemberLongFlex";

export default function Member() {
  return (
    <div id="member-page" className="section">
      <div className="page-container">
        {/* Header */}
        <div>
          <h1 className="vbg-text w700">Member & Staff</h1>
          <hr className="small-blue-hr" />
        </div>

        {/* Choice */}
        <div id="member-choice-section">
          <div>
            <p className="sm-text w500 small-ls">
              สมาชิกของศูนย์วิจัย QX KMUTT{" "}
            </p>
          </div>
          <div>
            <h1 className="sm-text w500 member-choice red-choice white-text">
              นักวิจัย
            </h1>
            <h1 className="sm-text w500 member-choice blue-choice white-text">
              สมาชิกปัจจุบัน
            </h1>
            <h1 className="sm-text w500 member-choice grey-choice white-text">
              สมาชิกเก่า
            </h1>
          </div>
        </div>

        <hr className="small-grey-hr member-grey-hr" />

        <div id="member-long-list">
          <MemberLongFlex color="red"/>
          <MemberLongFlex color="red"/>
          <MemberLongFlex color="red"/>
          <MemberLongFlex color="red"/>
          <MemberLongFlex color="red"/>
          <MemberLongFlex color="blue"/>
          <MemberLongFlex color="blue"/>
          <MemberLongFlex color="grey"/>
        </div>
      </div>
    </div>
  );
}
