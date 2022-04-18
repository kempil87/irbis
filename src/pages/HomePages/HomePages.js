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



                <News/>
                <Championship/>
                <Club/>
                <Media/>
                <Shop/>
                <Partners/>
            </nav>



    )
}
