import React from 'react'

import "../../assets/css/text.css";
import "../../assets/css/pages.css";
import "../../assets/css/elements/articleFlex.css"
import ImageService from "../../services/image";

export default function ArticleFlex(props) {
  return (
    <div className="article-flex">
        {
          props.data ? (
            <img src={ImageService.getCover(props.data)} alt=""/>
          ):(
            <div className="temp-img"></div>
          )
        }
       
        <div> {
          props.data && 
          <h1 style={{cursor:'pointer'}}>{props.data.attributes.title}</h1> 
          }
        </div>
    </div>
  )
}
