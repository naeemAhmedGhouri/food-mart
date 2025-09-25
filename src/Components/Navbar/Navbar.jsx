import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import {Link} from 'react-router-dom';
import { use } from 'react';
import { StoreContext } from '../../Context/storeContext';
const Navbar = ({ setShowLogin }) => {
  const [menu,setMenu]= useState("menu");
  const{getTotalCartAmount}=useContext(StoreContext);

  return (
    <div className='navebar'>
     <Link to='/' ><img src={assets.logo} alt="" className="logo"/></Link>
     <ul className="navbar-menu">
      <Link to ='/' onClick={()=>setMenu("home")} className={menu==="home"?"acvtive":""}>Home</Link>
      <a href='#explore-menue'onClick={()=>setMenu("menu")} className={menu==="menu"?"acvtive":""}>menu</a>
      <a href='#app-download'onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"acvtive":""}>mobile-app</a>
      <a href='#footer'onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"acvtive":""}>contact us</a>
     </ul>
     <div className="navbar-right"> 
      <img src={assets.search_icon} alt="" />
      <div className="navbar-search-icon">
    <Link to='/cart'>   <img src={assets.basket_icon} alt="" /></Link> 
        <div className={getTotalCartAmount()===0?"":"dot"}></div>
      </div>
      <button onClick={()=>setShowLogin(true)}>sign in</button>
     </div>

    </div>
  )
}

export default Navbar
