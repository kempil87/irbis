import React from 'react';
import './Drawer.css'
import {Link} from "react-router-dom";

const Drawer = ({closeCart, items}) => {

  const totalSum = items.filter((s) => s.salePrice === '')
  .map(obj => obj.price)
  .reduce((previousValue, currentValue) => Number(previousValue) + Number(currentValue), 0);

  const sum = items.map(obj => obj.price)
  .reduce((previousValue, currentValue) => Number(previousValue) + Number(currentValue), 0);
  console.log(sum, 3234)

  const totalSumSale = items.filter((s) => s.salePrice !== '')
  .map(obj => obj.salePrice)
  .reduce((previousValue, currentValue) => Number(previousValue) + Number(currentValue), 0);

  const totalPrice = +totalSum + +totalSumSale
  const discount = Math.round(100 - (totalPrice * 100 / sum))
  console.log(666, items)
  return (
    <div onClick={closeCart} className='drawer-wrap'>
      <div onClick={(event => event.stopPropagation())}
           className={items.length !==0 ? 'drawer-menu d-flex flex-column justify-content-between':'drawer-menu d-flex flex-column justify-content-center'}
      >
        {items.length !==0 ?(
          <>
            <div>
              <div className='drawer-top d-flex justify-content-between mt-2 align-items-center container p-2'>
                <h4 className='mt-2 align-items-center container total-top'>{items.length} товаров на {totalPrice} ₽</h4>
                <span onClick={closeCart} style={{cursor: 'pointer', margin: 0}}
                      className="material-icons-outlined">close</span>
              </div>
              <div className='drawer-content  overflow-auto m-2'>
                {items.map((i) => (
                  <div key={i._id} style={{margin: 10}}>
                    <div className='d-flex'>
                      <img style={{objectFit: 'cover'}} width='100' src={i.image} alt='product-image'/>
                      <div style={{marginLeft: 6}}>
                        <h6 style={{fontSize: 14}} className=''>{i.name}</h6>
                        {i.salePrice ? (
                          <div className="d-flex ">
                            <div className="product-price">{i.salePrice}₽</div>
                            <div className="product-salePrice">{i.price}₽</div>
                          </div>
                        ) : (
                          <div style={{fontSize: 14, fontWeight: 600}} className="">{i.price}₽</div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{marginBottom: 30}} className='drawer-bottom container'>
              <div className='d-flex justify-content-between m-2 align-items-center flex-column'>
                <div className='d-flex justify-content-between m-2 align-items-center w-100'>
                  <h6 style={{fontWeight: 400}}>Сумма заказа</h6>
                  <h6 style={{fontWeight: 600}}>{totalPrice} ₽</h6>
                </div>
                <h6 className='d-flex  w-100' style={{fontWeight: 600}}>Скидка {discount} %</h6>
              </div>
              <div className='d-flex justify-content-center'>
                <Link onClick={closeCart} className='text-center cart-clear-link ' to='/shop/orders'>Перейти к оформлению</Link>
              </div>
            </div>
          </>
        ):(
          <div className='d-flex justify-content-center align-items-center flex-column'>
            <img  src="https://i.pinimg.com/originals/2a/07/68/2a0768ab8facc0a9917c090909892377.png"
                  alt='cart-irbis'
                  width='60%'
                  style={{objectFit:"cover"}}
            />
            <h5 className='text-center cart-clear-text col-10'>
              Ваша корзина пуста, откройте «Каталог»
              и выберите понравившийся товар.
              Мы доставим ваш заказ от 599 ₽
            </h5>
            <Link onClick={closeCart} className='text-center cart-clear-link ' to='/shop'>Вернуться к Каталогу</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Drawer;