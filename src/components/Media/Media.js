import React, {useEffect, useState} from "react";
import "./Media.css"
import {Link} from "react-router-dom";
import {api} from "../../base/axios";
import Loader from "../Loader/Loader";

export const Media = () => {
  const [homeMedia, setHomeMedia] = useState([]);
  const [loader, setLoader] = useState(true);


  const getHomeMedia = () => {
    api.get('/media').then((res) => {
      setHomeMedia(res.data.slice(0, 6))
      setLoader(false)
    })
  }

  useEffect(() => {
    getHomeMedia()
  }, [])

  return (
    <div className="media">
      <div className="media-wrap"/>
      <div className="d-flex justify-content-between container">
        <h3>Медиа</h3>
        <Link to="/media" className="all-players ">
          Все Фото
          <span className="material-icons-outlined">
            <span className="material-icons-outlined">
              arrow_right_alt
            </span>
          </span>
        </Link>
      </div>
      {loader ?(
        <Loader/>
      ):(
        <div className="d-flex">
          <div className="d-flex flex-row flex-wrap container justify-content-between">
            {homeMedia.map((card) => (
              <Link to={`/media/${card._id}`} key={card._id} className="col-12 col-md-6 col-lg-4 d-flex flex-column photo-card align-items-center">
                <img className="med col-11" src={card.image} alt='фото'/>
                <div className=" media-image-grad "/>
                <div className="media-all d-flex align-items-center">
                  <span className="material-icons-outlined">image</span>
                  {card.all}
                </div>
                <div className="media-date">{card.date}</div>
                <div className="media-title">{card.name}</div>
              </Link>
            ))}

          </div>
        </div>
      )}

    </div>
  )
}
