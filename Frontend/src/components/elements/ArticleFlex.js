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
       
        <div className='article-flex-info'> 
          {
          props.data && 
          <h1 className="w700 xm2-text pointer clamp-2">{props.data.attributes.title}</h1> 
          }
          {
            props.data &&
            (<h1 className="w400 xm3-text pointer clamp-2">{props.data.attributes.description}</h1>)
          }
        </div>
    </div>
  )
}
