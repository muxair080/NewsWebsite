import '../Styles/NewsItem.css';
import React from 'react'


 const NewsItem = (props)=>{
    

        let {title , description,imgurl,newsurl,author , date} = props;
        return (
            <div>
        <div className="card News-card my-3">
        <img src={!imgurl?'<img src="https://bsmedia.business-standard.com/_media/bs/img/article/2021-08/29/full/1630211155-3037.jpg" class="card-img-top " alt="Error" style="height: 40vh;">':imgurl} className="card-img-top news-img" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text author-date"><small className="text-muted">By: {author===null?'Unknown':author} Date:{new Date(date).toGMTString()}</small></p>
          <a href={newsurl} className="btn btn-primary read-more-btn">Read More</a>
        </div>
      </div>
     </div>
      )  
}
export default NewsItem;