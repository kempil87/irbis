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
        <div>
            <div className="container">
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
                <div className="mediaIn-title">{info.name}</div>
            </div>
            <div className="container">
                <ImageGallery

                    thumbnailPosition={'top'}
                    items={info.photo.map((i) => ({original: i.image, thumbnail: i.image}))}
                    disableThumbnailScroll={true}
                />
                <h6 className="d-flex justify-content-center mt-5 mb-5" style={{color: "gray", fontSize: 12}}>
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
    );
};
export default MediaPageIn;
