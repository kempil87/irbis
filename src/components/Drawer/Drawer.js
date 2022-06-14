import React from 'react';
import './Drawer.css'
import {Button} from "react-bootstrap";

const Drawer = ({closeCart, items}) => {


  const totalSum = items.map(obj => obj.price).reduce(
    (previousValue, currentValue) => Number(previousValue) + Number(currentValue));

  const totalItem = items.map(obj => obj.price).length;



  return (
    <div onClick={closeCart} className='drawer-wrap'>
      <div onClick={(event => event.stopPropagation())}
           className="drawer-menu d-flex flex-column justify-content-between  ">
        <div>
          <div className='drawer-top d-flex justify-content-between mt-2 align-items-center container p-2'>
            <h4 className='mt-2 align-items-center container total-top'>{totalItem} товаров на {totalSum} ₽</h4>
            <h6 onClick={closeCart} style={{cursor: 'pointer', margin: 0}}>
              <span className="material-icons-outlined">close</span>
            </h6>
          </div>
        </div>

        <div className='drawer-content  overflow-auto m-2'>
          {items.map((i) => (
            <div key={i._id}>
              {items ? (
                <div className='d-flex mt-3 mb-3 '>
                  <img style={{objectFit:'cover'}} width='100'  src={i.image}/>
                  <div style={{marginLeft:6}}>
                    <h6 style={{fontSize:14}} className=''>{i.name}</h6>
                    {i.salePrice ? (
                      <div  className="d-flex ">
                        <div className="product-price">{i.salePrice}₽</div>
                        <div className="product-salePrice">{i.price}₽</div>
                      </div>
                    ) : (
                      <div  style={{fontSize:14,fontWeight:600}} className="">{i.price}₽</div>
                    )}
                  </div>

                </div>
              ) : (
                <div className=''>
                  Drawer clear
                </div>
              )}
            </div>


          ))}
        </div>
        <div style={{marginBottom: 30}} className='drawer-bottom container'>
          <div className='d-flex justify-content-between m-2 align-items-center'>
            <h5 style={{fontWeight:400}}>Сумма</h5>
            <h6 style={{fontWeight:600}}>{totalSum}₽</h6>
          </div>
          <div className='d-flex justify-content-center'>
            <Button style={{borderRadius:0 ,backgroundColor:'#173460'}} variant='dark '>Перейти к оформлению</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;