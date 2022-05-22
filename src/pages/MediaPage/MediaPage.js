import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {api} from "../../base/axios";
import Loader from "../../components/Loader/Loader";

const MediaPage = () => {
  const {_id} = useParams()
  const [media, setMedia] = useState([]);
  const [loader, setLoader] = useState(true);


  const getMedia = () => {
    api.get('/media').then((res) => {
      setMedia(res.data)
      setLoader(false)
    })
  }

  useEffect(() => {
    getMedia()
  }, [])
  return (
    <div className="media-wrapper">
      <h4 className="container">Все фото</h4>
      {loader ? (
        <Loader/>
      ):(
        <>
          <div className="d-flex  mt-2">
            <div className=" align-items-center container d-flex flex-wrap  ">
              {media.map(m => (
                <Link to={`/media/${m._id}`} key={m._id} className=" col-11 col-lg-4 d-flex flex-column photo-card">
                  <img width="400" height='267' className="d-none d-lg-block media-image " src={m.image} alt='фото'/>
                  <img width="380" height='247' className="d-block d-lg-none media-image col-12" src={m.image} alt='фото'/>
                  <div className=" media-image-grad "/>
                  <div className="media-all d-flex align-items-center">
                                    <span className="material-icons-outlined">
                                     image
                                    </span>
                    {m.all}
                  </div>
                  <div className="media-date">{m.date}</div>
                  <div className="media-title">{m.name}</div>
                </Link>
              ))}
            </div>
          </div>
          <div id="video" className="container d-flex flex-column ">
            <h4>Все видео</h4>
            <div className="all-video d-flex overflow-auto">
              {media.map(v => (
                <div className="">
                  {v.videoSource !== "" && (
                    <iframe className="m-1" src={v.videoSource}
                            width="580" height="400" allow="autoplay; encrypted-media; fullscreen; picture-in-picture;"
                            frameBorder="0" allowFullScreen></iframe>
                  )}
                </div>
              ))}
            </div>



            <div className="d-flex d-lg-none flex-wrap justify-content-around  m-4">
              <iframe className="mt-4 col-12"
                      src="https://vk.com/video_ext.php?oid=-205019585&id=456239112&hash=4f37e9b47f215995&hd=2"
                      width="380" height="300" allow="autoplay; encrypted-media; fullscreen; picture-in-picture;"
                      frameBorder="0" allowFullScreen/>
              <iframe className="mt-4 col-12"
                      src="https://vk.com/video_ext.php?oid=-205019585&id=456239110&hash=68228fc93095df27&hd=2"
                      width="380" height="300" allow="autoplay; encrypted-media; fullscreen; picture-in-picture;"
                      frameBorder="0" allowFullScreen/>
              <iframe className="mt-4 col-12"
                      src="https://vk.com/video_ext.php?oid=-205019585&id=456239111&hash=eb7e4166de3f261b&hd=2"
                      width="380" height="300" allow="autoplay; encrypted-media; fullscreen; picture-in-picture;"
                      frameBorder="0" allowFullScreen/>

              <iframe className="col-12 mt-4" width="380" height="275" src="https://www.youtube.com/embed/9ARSWOa5vFo"
                      title="YouTube video player" frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen/>
              <iframe className="col-12 mt-4" width="380" height="275" src="https://www.youtube.com/embed/9ARSWOa5vFo"
                      title="YouTube video player" frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen/>


            </div>
          </div>
        </>
      )}

    </div>
  );
};

export default MediaPage;
