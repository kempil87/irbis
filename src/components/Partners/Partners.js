import React from "react";
import "./Partners.css"
import OxdogSvg from "../../assets/OxdogSvg";

export const Partners = () => {
    return (
        <div className="partners ">
            <h4 className="page-tittle-partners col-9 col-lg-12">Партнеры и спонсоры ФБК Ирбис</h4>
            <div className="d-flex flex-wrap justify-content-center justify-content-md-between align-items-center container ">
                <a href="https://www.radiorecord.ru/" target={"_blank"} className="sponsor-item">
                    <img className="cover"
                         src="https://2sticker.ru/wa-data/public/shop/products/04/webp/86/12/1286/images/3604/3604.750.webp"
                         alt='sponsor'/>
                </a>
                <a href="https://www.oxdog.net/" target={"_blank"} className="sponsor-item">
                    <OxdogSvg/>
                </a>
                <a href="https://suvarionline.ru/" target={"_blank"} className="sponsor-item">
                    <img className="cover"
                         src="http://www.suvari.com.ro/images/thumbs/0000159.png"
                         alt='sponsor'/>
                </a>

                <a href="/" target={"_blank"} className="sponsor-item disabled-link">
                    <h5 style={{color:"black"}}>PROFOOTBALLSTORE</h5>
                </a>
                <a href="https://cheerlab.ru/" target={"_blank"} className="sponsor-item">
                    <img className="cover"
                         src="https://sun9-86.userapi.com/impf/fPs6fjB903uOqHquks8__NfohkdyeyudoDilxw/5hyuLg_mwjI.jpg?size=1280x249&quality=95&sign=4ee2abde07f27f7a30bdbff74eb024f5&type=album"
                         alt='sponsor'/>
                </a>
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
