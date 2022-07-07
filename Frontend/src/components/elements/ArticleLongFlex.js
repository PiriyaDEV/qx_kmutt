import React from "react";

import "../../assets/css/text.css";
import "../../assets/css/pages.css";
import "../../assets/css/elements/articleLongFlex.css";

import calendar from "../../assets/images/icon/calendar-blue.svg"
import location from "../../assets/images/icon/location-blue.svg"
import right from "../../assets/images/icon/right.svg"

export default function ArticleLongFlex(props) {
  return (
    <div className="article-long-flex">
      <img className={`${props.type === "post" ? "posttp-long-flex" : null}`} src="https://thaipbs-world.s3.ap-southeast-1.amazonaws.com/thaipbsworld/wp-content/uploads/2019/12/29110958/Thailand-Prayut-Chan-ocha-Twitter-900x540.jpg" alt=""/>
      <div className="article-long-flex-info">
        <div>
        {
          props.data && (<p className="w600 vsm-text clamp-2 break-word">{props.data.attributes.title}</p>)
        }
        {
          props.data && (<p className="w400 xm3-text clamp-3 article-long-descp">{props.data.attributes.description}</p>)
        }
        </div>
        {
          props.data && props.page === "activity" && (
            <div className="article-activity-info-bottom">
              <div>
                <img className="article-long-icon" src={location} alt="" />
                <h1 className="blue-text xm2-text w600">{props.data.attributes.location_name}</h1>
              </div>
              <div>
                <img className="article-long-icon" src={calendar} alt="" />
                <h1 className="blue-text xm2-text w600">{props.data.attributes.start_date}</h1>
              </div>
              <div>
                <h1 className="blue-text xm-text w500">สนใจเข้าร่วม</h1>
                <img className="article-long-right" src={right} alt="" />
              </div>
            </div>
          )
        }
        {
          props.data && props.page === "research" && (
            <div className="article-research-info-bottom">
              <div className="article-research-cat">
                <div className="xm3-text w400 blue-text">
                  {props.data.attributes.categories.data[0].attributes.name}
                </div>
                <div className="xm3-text w400 blue-text">
                  {props.data.attributes.categories.data[0].attributes.name}
                </div>
              </div>
              <div>
                <h1 className="blue-text xm-text w500">อ่านต่อ...</h1>
                <img className="article-long-right" src={right} alt="" />
              </div>
            </div>
          )
        }
      </div>
      <div/>
    </div>
  );
}
