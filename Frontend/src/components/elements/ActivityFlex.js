import React from "react";

import "../../assets/css/text.css";
import "../../assets/css/pages.css";
import "../../assets/css/elements/activityFlex.css";

import location from "../../assets/images/icon/location.svg";
import calendar from "../../assets/images/icon/calendar.svg";

export default function ArticleLongFlex(props) {
  return (
    <div
      className="temp-project"
      style={{
        backgroundImage: `linear-gradient(0deg, #378798 0%, rgba(55, 135, 152, 0.81) 31.89%, rgba(196, 196, 196, 0) 87.98%, rgba(196, 196, 196, 0) 109.95%),url('${props.data.cover_url}')`,
      }}
    >
      <h1 className="activity-flex-name white-text w700 sm-text clamp-2">
        {props.data.title}
      </h1>
      <div className="activity-flex-info">
        <div>
          <img src={location} alt="" />
          <h1 className="white-text xm2-text 400">
            {props.data.location_name}
          </h1>
        </div>
        <div>
          <img src={calendar} alt="" />
          <h1 className="white-text xm2-text w400">{props.data.start_date}</h1>
        </div>
      </div>
    </div>
  );
}
