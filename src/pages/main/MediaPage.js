import React from 'react';
import {Link, useParams} from "react-router-dom";
import {MediaData} from "../../data/mediaData/MediaData";
import Stories from 'react-insta-stories';

const MediaPage = () => {
    const {id} = useParams()
    const info = MediaData.find(i => i.id === +id)

    const gallery = MediaData.map(i => i.image)

    return (
        <div className="media-wrapper">
            <h4 className="container">Все фото</h4>
            <div className="d-flex  mt-2">
                <div className=" container d-flex flex-wrap justify-content-between">
                    {MediaData.map((card) => (

                        <Link to={`/media${card.id}`} key={card.id} className="d-flex flex-column photo-card">
                            <img width="400" height='267' className="media-image" src={card.image} alt='фото'/>
                            <div className="media-image-grad"/>
                            <div className="media-all d-flex align-items-center">
                                    <span className="material-icons-outlined">
                                     image
                                    </span>
                                {card.all}
                            </div>
                            <div className="media-date">{card.date}</div>
                            <div className="media-title">{card.name}</div>
                        </Link>
                    ))}

                </div>
            </div>
            <div id="video" className="container d-flex flex-column flex-wrap ">
                <h4 >Все видео</h4>
                <div className="d-flex flex-wrap justify-content-around">
                    <iframe width="580" height="375" src="https://www.youtube.com/embed/9ARSWOa5vFo"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen/>
                    <iframe width="580" height="375" src="https://www.youtube.com/embed/9ARSWOa5vFo"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen/>
                    <iframe className="mt-4" src="https://vk.com/video_ext.php?oid=-205019585&id=456239110&hash=68228fc93095df27&hd=2"
                            width="580" height="375" allow="autoplay; encrypted-media; fullscreen; picture-in-picture;"
                            frameBorder="0" allowFullScreen/>
                    <iframe className="mt-4" src="https://vk.com/video_ext.php?oid=-205019585&id=456239106&hash=868c23293dc94476&hd=2"
                            width="580" height="375" allow="autoplay; encrypted-media; fullscreen; picture-in-picture;"
                            frameBorder="0" allowFullScreen/>

                </div>

            </div>

            {/*<Stories*/}
            {/*    stories={gallery}*/}
            {/*    defaultInterval={1500}*/}
            {/*    width={432}*/}
            {/*    height={768}*/}
            {/*/>*/}

        </div>
    );
};

export default MediaPage;
