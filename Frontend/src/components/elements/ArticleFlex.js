import React from "react";

import "../../assets/css/text.css";
import "../../assets/css/pages.css";
import "../../assets/css/elements/articleFlex.css";

import nextArrow from "../../assets/images/icon/arrow.svg";

export default function ArticleFlex(props) {
  const linkPath = () => {
    window.location.href = `/${props.type}-post/` + props.data.slug;
  };

  return (
    <div className="article-flex" onClick={() => linkPath()}>
      {props.data ? (
        <img src={props.data.cover_url} alt="" />
      ) : (
        <div className="temp-img"></div>
      )}

      <div className="article-flex-info">
        {props.data && (
          <h1 className="w700 xm2-text pointer clamp-2">{props.data.title}</h1>
        )}
        {props.data && (
          <h1 className="w400 xm3-text pointer clamp-2">
            {props.data.description}
          </h1>
        )}
        <div className="article-flex-info-arrow">
          <img src={nextArrow} alt="" />
        </div>
      </div>
    </div>
  );
}
