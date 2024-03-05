import React from 'react'

const NewsItem =(props)=> {

    let {title,description,imgUrl, newsUrl, author, date, source} = props;
    return (
      <div className="my-5 mx-5">
        <div className="card" style={{width:  '18rem'}}>
  <img src={imgUrl?imgUrl:"https://i.insider.com/6589c0371c5c7b8c9a0bead9?width=1200&format=jpeg"} className="card-img-top" alt="..."/>
  <div className="card-body">
  <span className="position-absolute top-0 left-10 start-100 translate-middle badge rounded-pill bg-danger">
   {source}
    <span className="visually-hidden">unread messages</span>
  </span>
    <h5 className="card-title"> {title}...</h5>
    <p className="card-text">{description}... <span className="badge bg-secondary">New</span> </p>
    <p className="card-text"><small className="text-body-secondary">By {!author?"Anonymous":author} on {new Date(date).toDateString()}</small></p>
    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
      </div>
    )
  
}

export default NewsItem
