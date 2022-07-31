import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {Button} from "@mui/material";

const CardShop = ({badge, image, name, price, _id, salePrice, addToCart}) => {
  const [check, setCheck] = useState(false)

  const onClickAdd = () => {
    addToCart(_id)

    setCheck(true)
  }

  return (
    <div className='container product-card mt-3'>
      <div className="d-flex flex-column align-items-center product-top">
        <img className="product-img" src={image} alt='товар'/>
        {badge && (<div className="product-badge">{badge}</div>)}
      </div>
      <div>
        <div className="product-name">{name}</div>
        <div className="d-flex justify-content-between mb-2 align-items-center">
          {salePrice ? (
            <div className="d-flex">
              <div className="product-price">{salePrice} ₽</div>
              <div className="product-salePrice">{price} ₽</div>
            </div>
          ) : (
            <div className="product-price">{price} ₽</div>
          )}
          <Link to={`/shop/${_id}`} className="product-btn">Смотреть</Link>

          <Button disabled={check && true} onClick={onClickAdd} style={{fontWeight: 200, marginLeft: 8}}>
            <span className='material-icons-outlined'>{check ? 'done' : 'add'}</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardShop;