import React from 'react';
import './Error.css'
import {Link} from "react-router-dom";

const Error = () => {
    return (
        <div className="  error-wrap">
            <div className="container d-flex ">
                <div className=" error-text" >Страница не найдена (404 ошибка)<br/>
                    <h3>  Страница удалена или не существует.</h3>
                    <Link className=" error-button col-6 mt-5" to="/">На главную</Link>
                </div>
                <img  src="https://i.pinimg.com/originals/2a/07/68/2a0768ab8facc0a9917c090909892377.png"/>
            </div>
        </div>
    );
};

export default Error;
