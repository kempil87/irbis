import React from 'react';
import {Link} from "react-router-dom";

const NewsCard = ({_id, image, badge, date, title}) => {
  return (
      <Link to={`/news${_id}`} className="newsCard-wrap col-10 col-lg-3 mt-4 mb-4 d-flex flex-column ">
        <div className="d-flex flex-column justify-content-between align-items-center"
             style={{width: '100%', height: '100%'}}>
          <div className="newsPage-top d-flex  justify-content-center">
            <img className="news-image" src={image}  alt="Новость"/>
            <div className="news-badge">{badge}</div>
          </div>

          <div className="newsPage-bottom d-flex flex-column  justify-content-center">
            <div className="news-date mt-2">{date}</div>
            <div className="news-title  mt-2">{title}</div>
          </div>
        </div>
      </Link>
  );
};

export default NewsCard;