import React from "react";

import "../../assets/css/text.css";
import "../../assets/css/pages.css";
import "../../assets/css/elements/articleLongFlex.css";

import calendar from "../../assets/images/icon/calendar-blue.svg";
import location from "../../assets/images/icon/location-blue.svg";
import right from "../../assets/images/icon/right.svg";

export default function ArticleLongFlex(props) {
  const linkPath = (path) => {
    window.location.href = path;
  };

  const linkNewTab = (link) => {
    window.open(link);
  };

  return (
    <div className="article-long-flex">
      <div className="article-img-banner">
        <img
          className={`pointer ${props.type === "post" ? "posttp-long-flex" : null}`}
          src={props.data.cover_url}
          alt=""
          onClick={() => linkPath("/activity-post/" + props.data.slug)}
        />
        {props.type === "post" && (
          <img
            onClick={() => linkPath("/article-post/" + props.data.slug)}
            className="article-long-homepage pointer"
            src={right}
            alt=""
          />
        )}
      </div>
      <div className="article-long-flex-info">
        <div>
          {props.data && (
            <p className="w600 vsm-text clamp-2 break-word pointer" onClick={() => linkPath("/activity-post/" + props.data.slug)}>
              {props.data.title}
            </p>
          )}
          {props.data && (
            <p className="w400 xm3-text clamp-3 article-long-descp pointer" onClick={() => linkPath("/activity-post/" + props.data.slug)}>
              {props.data.description}
            </p>
          )}
        </div>
        {props.data && props.page === "activity" && (
          <div className="article-activity-info-bottom">
            <div>
              <img
                onClick={() => linkNewTab(props.data.location_url)}
                className="article-long-icon"
                style={{ cursor: `pointer` }}
                src={location}
                alt=""
              />
              <h1
                onClick={() => linkNewTab(props.data.location_url)}
                style={{ cursor: `pointer` }}
                className="blue-text xm2-text w600 "
              >
                {props.data.location_name}
              </h1>
            </div>
            <div>
              <img className="article-long-icon" src={calendar} alt="" />
              <h1 className="blue-text xm2-text w600">
                {props.data.start_date}
              </h1>
            </div>
            <div
              onClick={() => linkPath("/activity-post/" + props.data.slug)}
              className="pointer"
            >
              <h1 className="blue-text xm-text w500">สนใจเข้าร่วม</h1>
              <img className="article-long-right" src={right} alt="" />
            </div>
          </div>
        )}
        {props.data && props.page === "research" && (
          <div className="article-research-info-bottom">
            <div className="article-research-cat">
              {props.data.categories.map((category, index) => (
                <div className="xm3-text w400 blue-text" key={index}>
                  {category.name}
                </div>
              ))}
            </div>
            <div>
              <h1 className="blue-text xm-text w500">อ่านต่อ...</h1>
              <img className="article-long-right" src={right} alt="" />
            </div>
          </div>
        )}
      </div>
      <div />
    </div>
  );
}
