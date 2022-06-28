import React from 'react'

import "../../assets/css/text.css";
import "../../assets/css/pages.css";
import "../../assets/css/elements/articleFlex.css"
import ImageService from "../../services/image";

export default function ArticleFlex(props) {

  const linkPath = (path) => {
    window.location.href = path;
  };

  return (
    <div className="article-flex" onClick={() => linkPath("/article-post/" + props.data.attributes.slug)}>
        {
          props.data ? (
            <img src={ImageService.getCover(props.data)} alt=""/>
          ):(
            <div className="temp-img"></div>
          )
        }
       
        <div> 
          {
          props.data && 
          <h1 class="w700 xm2-text pointer">{props.data.attributes.title}</h1> 
          }
        </div>
    </div>
  )
}
