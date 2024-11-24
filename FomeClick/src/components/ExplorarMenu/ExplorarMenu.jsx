import React from 'react'
import './ExplorarMenu.css'
import { menu_list } from '../../assets/assets'

const ExplorarMenu = ({categoria,setCategoria}) => {
  return (
    <div className='explorar-menu' id='explorar-menu'>
        <h1>Explore o nosso Menu </h1>
        <p className='explorar-menu-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <div className="explorar-menu-list">
        {menu_list.map((item,index)=>{
            return (
                <div onClick={()=>setCategoria(prev=>prev===item.menu_nome?"Todas":item.menu_nome)} key={index} className='explorar-menu-list-item'>
                    <img className={categoria===item.menu_nome?"active":""} src={item.menu_imagem} alt="" />
                    <p>{item.menu_nome}</p>
                </div>
            ) 
        })}
      </div>
    </div>
  )
}

export default ExplorarMenu
