import React from "react";

import "../../assets/css/text.css";
import "../../assets/css/pages.css";
import "../../assets/css/elements/activityFlex.css";

import location from "../../assets/images/icon/location.svg";
import calendar from "../../assets/images/icon/calendar.svg";

export default function ArticleLongFlex(props) {
  let imgUrl = "";

  if (props.data) {
    imgUrl = props.data.cover_url;
  }

  const linkPath = (path) => {
    if (props.data !== null) {
      window.location.href = path + props.data.slug;
    }
  };

  return (
    <div
      className="temp-project"
      style={{
        backgroundImage: `linear-gradient(0deg, #378798 0%, rgba(55, 135, 152, 0.81) 31.89%, rgba(196, 196, 196, 0) 87.98%, rgba(196, 196, 196, 0) 109.95%),url('${imgUrl}')`,
      }}
      onClick={() => linkPath("/activity-post/")}
    >
      <h1 className="activity-flex-name white-text w700 sm-text clamp-2">
        {props.data !== null ? (
          <span>{props.data.title}</span>
        ) : (
          <span>Coming Soon</span>
        )}
      </h1>
      <div className="activity-flex-info">
        {props.data && (
          <div>
            <img src={location} alt="" />
            <h1 className="white-text xm2-text 400">
              {props.data.location_name}
            </h1>
          </div>
        )}
        {props.data && (
          <div>
            <img src={calendar} alt="" />
            <h1 className="white-text xm2-text w400">
              {props.data.start_date}
            </h1>
          </div>
        )}
      </div>
    </div>
  );
}
