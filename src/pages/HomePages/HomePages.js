import React from "react";
import {Championship} from "./Championship/Championship";
import {Club} from "./Club/Club";
import {News} from "./News/News";
import {Media} from "./Media/Media";
import {Shop} from "./Shop/Shop";
import {Partners} from "./Partners/Partners";


export const HomePages = () => {
    return (

            <nav className="item-nav ">

                    {/*<iframe src="https://yandex.ru/map-widget/v1/-/CCUFQRXh3A" width="560" height="400" frameBorder="1"*/}
                    {/*        allowFullScreen="true" ></iframe>*/}

                <News/>
                <Championship/>
                <Club/>
                <Media/>
                <Shop/>
                <Partners/>
            </nav>



    )
}
