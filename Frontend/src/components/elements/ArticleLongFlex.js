import React from "react";

import "../../assets/css/text.css";
import "../../assets/css/pages.css";
import "../../assets/css/elements/articleLongFlex.css";

export default function ArticleLongFlex(props) {
  return (
    <div className="article-long-flex">
      <img className={`${props.type === "post" ? "posttp-long-flex" : null}`} src="https://thaipbs-world.s3.ap-southeast-1.amazonaws.com/thaipbsworld/wp-content/uploads/2019/12/29110958/Thailand-Prayut-Chan-ocha-Twitter-900x540.jpg"/>
      <div className="article-long-flex-info">
        {
          props.data && (<h1 className="w600 vsm-text clamp-2">{props.data.attributes.title}</h1>)
        }
        {
          props.data && (<h1 className="w400 xm3-text clamp-3">{props.data.attributes.description}</h1>)
        }
      </div>
      <div/>
    </div>
  );
}
