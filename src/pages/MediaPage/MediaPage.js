import React, {useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {MediaData} from "../../data/mediaData/MediaData";

const MediaPage = () => {
    const {id} = useParams()
    const info = MediaData.slice(0,9).find(i => i.id === +id)

    return (
        <div className="media-wrapper">
            <h4 className="container">Все фото</h4>
            <div className="d-flex  mt-2">
                <div className="justify-content-center align-items-center container d-flex flex-wrap  ">
                    {MediaData.map(m =>(
                        <Link to={`/media${m.id}`} key={m.id} className=" col-11 col-lg-4 d-flex flex-column photo-card">
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
            <div id="video" className="container d-flex flex-column flex-wrap ">
                <h4>Все видео</h4>
                <div className="d-none d-lg-flex flex-wrap justify-content-around  m-4">
                    <iframe className="mt-4 col-12" src="https://vk.com/video_ext.php?oid=-205019585&id=456239112&hash=4f37e9b47f215995&hd=2"
                            width="580" height="400" allow="autoplay; encrypted-media; fullscreen; picture-in-picture;"
                            frameBorder="0" allowFullScreen></iframe>
                    <iframe className="mt-4"
                            src="https://vk.com/video_ext.php?oid=-205019585&id=456239110&hash=68228fc93095df27&hd=2"
                            width="580" height="400" allow="autoplay; encrypted-media; fullscreen; picture-in-picture;"
                            frameBorder="0" allowFullScreen/>
                    <iframe className="mt-4"
                            src="https://vk.com/video_ext.php?oid=-205019585&id=456239111&hash=eb7e4166de3f261b&hd=2"
                            width="580" height="400" allow="autoplay; encrypted-media; fullscreen; picture-in-picture;"
                            frameBorder="0" allowFullScreen/>

                    <iframe width="580" height="375" src="https://www.youtube.com/embed/9ARSWOa5vFo"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen/>
                    <iframe width="580" height="375" src="https://www.youtube.com/embed/9ARSWOa5vFo"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen/>


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


        </div>
    );
};

export default MediaPage;
