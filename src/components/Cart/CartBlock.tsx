import React from 'react'
import s from './CartBlock.module.scss';
import CartItem from './CartItem';
import cartStore from '../../store/cartStore';

const CartBlock = () => {
  const {cart, totalCost} = cartStore();
 
  return (
    <div className={s.cart}>
        <h1 className={s.cart__title}>Корзина</h1>
        <div className={s.cart__list}>
          {
            cart && cart.map((elem)=>(
              <CartItem key={elem.id} {...elem}/>
            ))
          }
        </div>
        <div className={s.cart__sum}>
            <p>Итог</p>
            <h3>
                {totalCost}
                <span> ₽</span>
            </h3>
        </div>
    </div>
  )
}

export default CartBlock