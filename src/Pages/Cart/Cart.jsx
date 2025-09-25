import React, { useContext } from 'react'
import { food_list } from '../../assets/assets';
import { assets } from '../../assets/assets';
import './Cart.css'
import { StoreContext } from '../../Context/storeContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const {cartItems,food_list,removeFromCart,getTotalCartAmount}= useContext(StoreContext);
  const navigate = useNavigate();

  return (
   
  
    <div className='cart'>
      <div className="cart-item"> 
        <div className="cart-item-title">
       <p>Items</p>
           <p>Title</p>
           <p>Price</p>
           <p>Quantity</p>
           <p>Total</p>
           <p>Remove</p>
           
         </div>
         <br />
         <hr />
         {food_list.map((items,index)=>{
          if(cartItems [items._id]>0)
          {
            return(
              <div className="cart-items-title cart-items-item"> 
              <img src={items.image} alt="" />
              <p>{items.name}</p>
               <p>${items.price}</p>
                <p>{cartItems[items._id]}</p>
                 <p>${items.price*cartItems[items._id]}</p>
                 <p className='cross' onClick={()=>removeFromCart(items._id)}>X</p>
                 <hr />
              </div>
            )
          }
         }) }
       </div>
       <div className="cart-bottom">
        <div className="cart-total">
          <h2>cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery fee</p>
              <p>${2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <b>${getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promo code, enter it here</p>
            <div className='cart-promocode-input'>
              <input type="text" placeholder='promo code' />
              <button>Submite</button>
            </div>
          </div>
        </div>
       </div>
  </div>
 
  );
}

export default Cart
