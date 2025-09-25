import React from 'react'
import './ExplorMenu.css'
import {menu_list} from '../../assets/assets'
const ExplorMenu = ({category,setCategory}) => {
  return (
    <div className='explor-menu' id='explore-menue'>
      <h1> Explore oure menu</h1>
      
      <p className='explor-menu-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus officia libero, tempora aliquam dolorum sint illum ab error neque odit?</p>
       <div className="explore-menu-list">
        {menu_list.map((item,index)=>{
          return(
            <div onClick={()=> setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menue-list-item">
              <img className={category===item.menu_name?"active":""} src={ item.menu_image} alt="" />
              <p>{item.menu_name}</p>
            </div>
          )
        })}
       </div>
       <hr />
    </div>
  )
}

export default ExplorMenu
