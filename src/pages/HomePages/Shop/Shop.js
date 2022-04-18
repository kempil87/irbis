import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Shop.css"
import {Link} from "react-router-dom";

export const Shop = () => {
    const productShop =[
        {
            id:1,
            image:"https://sun1-87.userapi.com/impg/zN1Hn4MJo6C06cmB1TdBLdmOL5WpdoqXRPudhg/jM4HTfzIYUg.jpg?size=0x179&crop=0.176,0.071,0.62,0.929&quality=95&sign=3e128d0dca531d39698f098a117b3690",
            price:3200,
            name:"Футболка ФБК Ирбис"
        },
        {
            id:2,
            image:"https://sun1-22.userapi.com/impg/0gSIzcDuBGkbnpOvKEB70LP0vkn6Wwi6xMeKEA/cJscfY7Qhn4.jpg?size=179x0&crop=0.016,0.188,0.976,0.651&quality=95&sign=ec7d0bca2f900ab92f9a2140cbad3a90",
            price:690,
            name:"Питьевая бутылка с логотипом клуба Oxdog"
        },
        {
            id:3,
            image:"https://sun1-97.userapi.com/impg/fQDy3509d1jBCWzz3FQ1Ji62zVVUrroJctOYzQ/8Fkej7yY_XE.jpg?size=0x179&crop=0.008,0.008,0.984,0.984&quality=95&sign=fd4b7dce4cae2a7d6ae34455e65d0e52",
            price:990,
            name:"Шарф ФБК Ирбис"
        },
        {
            id:4,
            image:"https://sun1-87.userapi.com/impg/zN1Hn4MJo6C06cmB1TdBLdmOL5WpdoqXRPudhg/jM4HTfzIYUg.jpg?size=0x179&crop=0.176,0.071,0.62,0.929&quality=95&sign=3e128d0dca531d39698f098a117b3690",
            price:3200,
            name:"Футболка ФБК Ирбис"
        },
        {
            id:5,
            image:"https://sun1-87.userapi.com/impg/zN1Hn4MJo6C06cmB1TdBLdmOL5WpdoqXRPudhg/jM4HTfzIYUg.jpg?size=0x179&crop=0.176,0.071,0.62,0.929&quality=95&sign=3e128d0dca531d39698f098a117b3690",
            price:1200,
            name:"Футболка ФБК Ирбис"
        },
        {
            id:3,
            image:"https://sun1-97.userapi.com/impg/fQDy3509d1jBCWzz3FQ1Ji62zVVUrroJctOYzQ/8Fkej7yY_XE.jpg?size=0x179&crop=0.008,0.008,0.984,0.984&quality=95&sign=fd4b7dce4cae2a7d6ae34455e65d0e52",
            price:990,
            name:"Шарф ФБК Ирбис"
        },
        {
            id:3,
            image:"https://sun1-97.userapi.com/impg/fQDy3509d1jBCWzz3FQ1Ji62zVVUrroJctOYzQ/8Fkej7yY_XE.jpg?size=0x179&crop=0.008,0.008,0.984,0.984&quality=95&sign=fd4b7dce4cae2a7d6ae34455e65d0e52",
            price:990,
            name:"Шарф ФБК Ирбис"
        },
    ]


    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: {max: 4000, min: 3000},
            items: 5
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 4
        },
        tablet: {
            breakpoint: {max: 1024, min: 576},
            items: 2
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1
        }
    };
    return (
        <div id="a" className="shop-wrap container">
            <div className="d-flex justify-content-between">
                <div className="home-title-shop mb-3 ">Магазин Атрибутики ФБК Ирбиса</div>
                <Link to="/shop" className="all-shop">
                    Все Товары
                    <span className="material-icons-outlined">
                        arrow_right_alt
                    </span>

                </Link>
            </div>


            <Carousel
                swipeable={false}
                draggable={false}
                responsive={responsive}

            >
                {productShop.map((i) => (
                    <div className="container product-card mt-3" key={i.id}>
                        <div className="d-flex flex-column align-items-center">
                            <img className="product-img" src={i.image}/>
                            <div className="product-name">{i.name}</div>
                        </div>
                        <div className="d-flex justify-content-between ">
                            <div className="product-price">{i.price} ₽</div>
                            <div className="product-btn">Смотреть</div>
                        </div>

                    </div>
                ))}
            </Carousel>


        </div>
    )
}
