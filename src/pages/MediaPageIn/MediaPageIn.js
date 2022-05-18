import React, {useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {MediaData} from "../../data/mediaData/MediaData";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import "./MediaPageIn.css"

const MediaPageIn = () => {
    const {id} = useParams()
    const info = MediaData.find(i => i.id === +id)

    const gallery = info.photo.map(i => i.image)


    return (
        <div style={{width:'100%'}}  className="container d-flex  justify-content-center flex-column">
            <div className="d-flex flex-column ">
                <Link to="/media" className="backMedia d-flex align-items-center mt-4">
                    <span className="material-icons-outlined">arrow_back_ios</span>
                    Назад
                </Link>
                <div className="mediaIn-all d-flex align-items-center mt-4">
                    <span className="material-icons-outlined">image</span>
                    {info.all}
                    <div className="mediaIn-date">{info.date}</div>
                    {info.photograph && (
                        <div className="photograph">Фото - {info.photograph}</div>
                    )}
                </div>
                <div className="d-none d-lg-block mediaIn-title">{info.name}</div>
                <div className="d-block d-lg-none mediaIn-title col-11">{info.name}</div>
            </div>
            <div className="d-flex justify-content-center align-items-center flex-column ">
                <div className="container ">
                    <ImageGallery

                        thumbnailPosition={'top'}
                        items={info.photo.map((i) => ({original: i.image, thumbnail: i.image}))}
                        disableThumbnailScroll={true}
                    />
                    <h6 className="d-none d-lg-flex justify-content-center mt-5 mb-5" style={{color: "gray", fontSize: 12}}>
                        Использование фотоматериалов разрешается при наличии активной гиперссылки на официальный сайт ФБК
                        "Ирбис"
                    </h6>
                    <h6 className="d-flex d-lg-none justify-content-center mt-5 mb-5" style={{color: "gray", fontSize: 10}}>
                        Использование фотоматериалов разрешается при наличии активной гиперссылки на официальный сайт ФБК
                        "Ирбис"
                    </h6>
                    {/*<Stories*/}
                    {/*    stories={gallery}*/}
                    {/*    defaultInterval={1500}*/}
                    {/*    width={432}*/}
                    {/*    height={768}*/}
                    {/*/>*/}
                </div>
            </div>


        </div>
    );
};
export default MediaPageIn;
