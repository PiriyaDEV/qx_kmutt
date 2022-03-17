import React from 'react'

import "../../assets/css/text.css";
import "../../assets/css/pages.css";
import "../../assets/css/elements/articleFlex.css"

export default function ArticleFlex(props) {
  return (
    <div className="article-flex">

        <div></div>  
        <div> {
          props.data && 
          <h1>{props.data.attributes.title}</h1> 
          }
        </div>
    </div>
  )
}
