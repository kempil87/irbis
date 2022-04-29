import React from "react";
import "./Footer.css"
import IconSvgInst from "../../assets/icons/IconSvgInst";
import IconSvgVk from "../../assets/icons/IconSvgVk";
import {IconSvgTlg} from "../../assets/icons/IconSvgTlg";
import {Link} from "react-router-dom";

export const Footer = () => {


    return (
        <>
            <div className="footer">
                <div className="footer-wrap container d-flex ">
                    <div className="footer-left d-flex col-4">
                        <img className="irbis-logo-footer" width="111" height="128"
                             src="https://xn--m1agla.xn--p1ai/wp-content/uploads/2021/12/Irbis-111x128.png"/>
                        <div className="contacts">
                            <h5>Контакты</h5>
                            <div className="footer-icons mt-2">
                                <div className="mb-3">+79033415510</div>
                                <Link title="Инстаграм" className="footer-icons" to="//vk.com/fbc_irbis" target="_blank">
                                    <IconSvgInst/>
                                </Link>
                                <Link title="ВКонтакте" className="footer-icons" to="//vk.com/fbc_irbis" target="_blank">
                                    <IconSvgVk/>
                                </Link>
                                <Link title="Телеграм" className="footer-icons" to="//vk.com/fbc_irbis" target="_blank">
                                    <IconSvgTlg/>
                                </Link>
                            </div>
                            <h6 className="mt-4 adress ">
                                420032,г.Казань <br/> ул. Краснококшайская д 178
                            </h6>
                        </div>
                    </div>
                    <div style={{marginLeft:14}} className="footer-mid d-flex mt-5 col-4">
                        <h6 className="">При использовании материалов ссылка на официальный сайт Флорбольного Клуба «Ирбис»
                            обязательна.
                            <p className="mt-2">Copyright 2009-2018</p>
                        </h6>
                    </div>
                    <div className="footer-right d-flex col-4 justify-content-center">
                        <div className="d-flex mt-5">
                            <Link style={{textDecoration:'none'}} to="//vk.com/glebofficial87" target={'_blank'}>Разработка сайта</Link>
                            <div style={{marginLeft:8,fontFamily:'cursive'}}>GM87.</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )


}
