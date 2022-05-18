import React from "react";
import {Championship} from "../../components/Championship/Championship";
import {Club} from "../../components/Club/Club";
import {News} from "../../components/News/News";
import {Media} from "../../components/Media/Media";
import {ShopPage} from "../ShopPage/ShopPage";


export const HomePages = () => {
    return (
            <nav className="item-nav ">
                <News/>
                <Championship/>
                <Club/>
                <Media/>
                <ShopPage/>
            </nav>
    )
}
