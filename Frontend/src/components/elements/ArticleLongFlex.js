import React from "react";

import "../../assets/css/text.css";
import "../../assets/css/pages.css";
import "../../assets/css/elements/articleLongFlex.css";

export default function ArticleLongFlex(props) {
  return (
    <div className="article-long-flex">
      <div className={`${props.type === "post" ? "posttp-long-flex" : null}`} />
      <div />
    </div>
  );
}
