import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Navbar/Header/Header'
import ExplorarMenu from '../../components/ExplorarMenu/ExplorarMenu'
import MostrarComida from '../../components/MostrarComida/MostrarComida'

const Home = () => {

    const[categoria,setCategoria] = useState("Todas");


  return (
    <div>
      <Header/>
      <ExplorarMenu categoria={categoria} setCategoria={setCategoria}/>
      <MostrarComida categoria={categoria}/> 
    </div>
  )
}

export default Home
