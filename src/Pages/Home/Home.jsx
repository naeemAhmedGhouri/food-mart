import React, { useState } from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import ExplorMenu from '../../Components/ExplorMenu/ExplorMenu'
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay'
import AppDowload from '../../Components/AppDowload/AppDowload'
const Home = () => {
  const [category ,setCategory] = useState("All")
  return (
    <div className='main' >
      <Header/>
      <ExplorMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <AppDowload/>
    </div>
  )
}

export default Home
