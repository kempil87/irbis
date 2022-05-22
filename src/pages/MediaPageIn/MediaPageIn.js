import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import "./MediaPageIn.css"
import {api} from "../../base/axios";
import Loader from "../../components/Loader/Loader";

const MediaPageIn = () => {
    const {_id} = useParams()
    const [media, setMedia] = useState([])
    const [loader, setLoader] = useState(true);

    const getMedia = () => {
        api.get(`/media/${_id}`).then((res) => {
            setMedia(res.data)
            setLoader(false)
        })
    }

    useEffect(() => {
        getMedia()
    }, [_id])

    // const gallery = info.photo.map(i => i.image)


    return (
        <div style={{width:'100%'}}  className="container d-flex  justify-content-center flex-column">
            {loader?(
              <Loader/>
            ):(
              <>
                  <div className="d-flex flex-column ">
                      <Link to="/media" className="backMedia d-flex align-items-center mt-4">
                          <span className="material-icons-outlined">arrow_back_ios</span>
                          Назад
                      </Link>
                      <div className="mediaIn-all d-flex align-items-center mt-4">
                          <span className="material-icons-outlined">image</span>
                          {media.all}
                          <div className="mediaIn-date">{media.date}</div>
                          {media.photograph && (
                            <div className="photograph">Фото - {media.photograph}</div>
                          )}
                      </div>
                      <div className="d-none d-lg-block mediaIn-title">{media.name}</div>
                      <div className="d-block d-lg-none mediaIn-title col-11">{media.name}</div>
                  </div>
                  <div className="d-flex justify-content-center align-items-center flex-column ">
                      <div className="container ">
                          {/*<ImageGallery*/}

                          {/*    thumbnailPosition={'top'}*/}
                          {/*    items={media.image}*/}
                          {/*    disableThumbnailScroll={true}*/}
                          {/*/>*/}
                          <img src={media.image}/>

                          {media.videoSource ?(
                            <div className="mt-2">
                                <h5>Видео</h5>
                                <iframe width="580" height="375" src={media.videoSource}
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen/>
                            </div>
                          ):(
                            <h5>Нет Видео</h5>
                          )}
                          <h6 className="d-none d-lg-flex justify-content-center mt-5 mb-5" style={{color: "gray", fontSize: 12}}>
                              Использование фотоматериалов разрешается при наличии активной гиперссылки на официальный сайт ФБК
                              "Ирбис"
                          </h6>
                          <h6 className="d-flex d-lg-none justify-content-center mt-5 mb-5" style={{color: "gray", fontSize: 10}}>
                              Использование фотоматериалов разрешается при наличии активной гиперссылки на официальный сайт ФБК
                              "Ирбис"
                          </h6>

                      </div>
                  </div>

              </>
            )}


        </div>
    );
};
export default MediaPageIn;
