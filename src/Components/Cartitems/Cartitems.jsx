import React from 'react'
import './Cartitems.css'
import { ShopContext } from '../../Context/Pages/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'
const Cartitems = () => {
    const {all_product,Cartitems,removeFromCart}= useContext(ShopContext);
  return (
    <div className='cartitems'>
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e)=>{
        if(Cartitems[e._id]>0)
})}
      <div>
        <div className="cartitems-fromat">
            <img src="" alt="" className='carticon-product-icon'/>
            <p></p>
            <p></p>
            <button className='cartitems-quantity'></button>
            <p></p>
            <img src={remove_icon} onClick={()=>{removeFromCart}} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Cartitems
