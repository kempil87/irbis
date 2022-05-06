import React from "react";
import "./Partners.css"
import {Link} from "react-router-dom";

export const Partners = () => {
    return (
        <div className="partners">
            <h4 className="page-tittle-partners col-9 col-lg-12">Партнеры и спонсоры ФБК Ирбис</h4>
            <div className=" d-none d-md-flex justify-content-between align-items-center container flex-wrap">
                <Link to="/" className="sponsor-item col-4">
                    <img className="sponsors-banner" width="120" height="132"
                         src="https://2sticker.ru/wa-data/public/shop/products/04/webp/86/12/1286/images/3604/3604.750.webp"
                         alt='sponsor'/>

                </Link>
                {/*<h6 className="sponsor-label">Информационный партнер</h6>*/}
                <Link to="/" className="sponsor-item col-4">
                    <img className="sponsors-banner-oxdog"
                         src="https://sportmagasinetmattsson.fi/files/tuotekuvat/29912_medium.png"
                         alt='sponsor'/>
                    {/*<h6 className="sponsor-label">Технический партнер</h6>*/}
                </Link>
                <Link to="/" className="sponsor-item  col-4">
                    <img className="sponsors-banner"
                         src="http://www.suvari.com.ro/images/thumbs/0000159.png"
                         alt='sponsor'/>
                    {/*<h6 className="sponsor-label">Поставщик</h6>*/}
                </Link>

                <Link to="/" className="sponsor-item  col-4">
                    <img className="sponsors-banner " width="120" height="132"
                         src="https://2sticker.ru/wa-data/public/shop/products/04/webp/86/12/1286/images/3604/3604.750.webp"
                         alt='sponsor'/>
                    {/*<h6 className="sponsor-label">Информационный партнер</h6>*/}
                </Link>
                <Link to="/" className="sponsor-item  col-4">
                    <img className="sponsors-banner-cheer"
                         src="https://sun9-86.userapi.com/impf/fPs6fjB903uOqHquks8__NfohkdyeyudoDilxw/5hyuLg_mwjI.jpg?size=1280x249&quality=95&sign=4ee2abde07f27f7a30bdbff74eb024f5&type=album"
                         alt='sponsor'/>
                    {/*<h6 className="sponsor-label">Информационный партнер</h6>*/}
                </Link>
                <Link to="/" className="sponsor-item  col-4">
                    <h5 className="sponsors-pro">PROFOOTBALSTORE.RU</h5>
                </Link>
            </div>
            <div className="partners-wrap d-flex d-md-none justify-content-center align-items-center  flex-wrap">
                <div className="container d-flex flex-wrap justify-content-center">
                    <Link to="/" className="sponsor-item col-10">
                        <img width="100%" height="100%" className="sponsors-banner" width="120" height="132"
                             src="https://2sticker.ru/wa-data/public/shop/products/04/webp/86/12/1286/images/3604/3604.750.webp"
                             alt='sponsor'/>

                    </Link>
                    {/*<h6 className="sponsor-label">Информационный партнер</h6>*/}
                    <Link to="/" className="sponsor-item col-10">
                        <img width="100%" height="100%" className="sponsors-banner-oxdog"
                             src="https://sportmagasinetmattsson.fi/files/tuotekuvat/29912_medium.png"
                             alt='sponsor'/>
                        {/*<h6 className="sponsor-label">Технический партнер</h6>*/}
                    </Link>
                    <Link to="/" className="sponsor-item  col-10">
                        <img width="100%" height="100%" className="sponsors-banner"
                             src="http://www.suvari.com.ro/images/thumbs/0000159.png"
                             alt='sponsor'/>
                        {/*<h6 className="sponsor-label">Поставщик</h6>*/}
                    </Link>

                    <Link to="/" className="sponsor-item  col-10">
                        <img width="100%" height="100%" className="sponsors-banner " width="120" height="132"
                             src="https://2sticker.ru/wa-data/public/shop/products/04/webp/86/12/1286/images/3604/3604.750.webp"
                             alt='sponsor'/>
                        {/*<h6 className="sponsor-label">Информационный партнер</h6>*/}
                    </Link>
                    <Link to="/" className="sponsor-item  col-10">
                        <img width="100%" height="100%" className="sponsors-banner-cheer"
                             src="https://sun9-86.userapi.com/impf/fPs6fjB903uOqHquks8__NfohkdyeyudoDilxw/5hyuLg_mwjI.jpg?size=1280x249&quality=95&sign=4ee2abde07f27f7a30bdbff74eb024f5&type=album"
                             alt='sponsor'/>
                        {/*<h6 className="sponsor-label">Информационный партнер</h6>*/}
                    </Link>
                    <Link to="/" className="sponsor-item  col-10">

                        <h5 className="sponsors-pro">PROFOOTBALSTORE.RU</h5>
                    </Link>
                </div>

            </div>
            {/*<div className="d-flex justify-content-between align-items-center container">*/}
            {/*    <div className="partners-des">Информационный партнер</div>*/}
            {/*    <div className="partners-des">Технический партнер</div>*/}
            {/*    <div className="partners-des">Поставщик</div>*/}
            {/*    <div className="partners-des">Информационный партнер</div>*/}
            {/*    <div className="partners-des">Информационный партнер</div>*/}
            {/*</div>*/}
            <div  className="to-top" onClick={() => window.scrollTo(0, 0)}>
                    <span className="material-icons-outlined">
                     straight
                    </span>
                Наверх
                <span className="material-icons-outlined">
                 straight
                </span>
            </div>
        </div>
    )
}
