import React from 'react';
import {useParams} from "react-router-dom";
import {MediaData} from "../../data/MediaData";

const MediaPageIn = () => {
    const {id} = useParams()
    const info = MediaData.find(i => i.id === +id)

    const gallery = MediaData.map(i => i.image)

    return (
        <div>
            <div>{info.name}</div>
            {/*<Stories*/}
            {/*    stories={gallery}*/}
            {/*    defaultInterval={1500}*/}
            {/*    width={432}*/}
            {/*    height={768}*/}
            {/*/>*/}

        </div>
    );
};
export default MediaPageIn;
