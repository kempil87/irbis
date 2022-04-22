import React from "react";
import "./Partners.css"
import {Link} from "react-router-dom";

export const Partners = () => {
    return (
        <div className="partners-wrap">
            <h4 className="page-tittle-partners ">Партнеры и споносры ФБК Ирбис</h4>
            <div className="d-flex justify-content-between align-items-center container">
                <Link to="/" className="sponsor-item">
                    <img className="sponsors-banner" width="120" height="132"
                         src="https://2sticker.ru/wa-data/public/shop/products/04/webp/86/12/1286/images/3604/3604.750.webp"
                         alt='sponsor'/>

                </Link>
                {/*<h6 className="sponsor-label">Информационный партнер</h6>*/}
                <Link to="/" className="sponsor-item">
                    <img className="sponsors-banner-oxdog"
                         src="https://sportmagasinetmattsson.fi/files/tuotekuvat/29912_medium.png"
                         alt='sponsor'/>
                    {/*<h6 className="sponsor-label">Технический партнер</h6>*/}
                </Link>
                <Link to="/" className="sponsor-item">
                    <img className="sponsors-banner"
                         src="http://www.suvari.com.ro/images/thumbs/0000159.png"
                         alt='sponsor'/>
                    {/*<h6 className="sponsor-label">Поставщик</h6>*/}
                </Link>

                <Link to="/" className="sponsor-item">
                    <img className="sponsors-banner" width="120" height="132"
                         src="https://2sticker.ru/wa-data/public/shop/products/04/webp/86/12/1286/images/3604/3604.750.webp"
                         alt='sponsor'/>
                    {/*<h6 className="sponsor-label">Информационный партнер</h6>*/}
                </Link>
                <Link to="/" className="sponsor-item">
                    <img className="sponsors-banner-cheer"
                         src="https://sun9-86.userapi.com/impf/fPs6fjB903uOqHquks8__NfohkdyeyudoDilxw/5hyuLg_mwjI.jpg?size=1280x249&quality=95&sign=4ee2abde07f27f7a30bdbff74eb024f5&type=album"
                         alt='sponsor'/>
                    {/*<h6 className="sponsor-label">Информационный партнер</h6>*/}
                </Link>
            </div>
            <div className="d-flex justify-content-between align-items-center container">
                <div className="partners-des">Информационный партнер</div>
                <div className="partners-des">Технический партнер</div>
                <div className="partners-des">Поставщик</div>
                <div className="partners-des">Информационный партнер</div>
                <div className="partners-des">Информационный партнер</div>
            </div>
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
