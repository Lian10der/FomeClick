import React, { useContext } from 'react'
import './MostrarComida.css'
import { LojaContext } from '../../context/LojaContext'
import ItemComida from '../ItemComida/ItemComida'

const MostrarComida = ({ categoria }) => {

  const { comida_list } = useContext(LojaContext)

  return (
    <div className='mostrar-comida' id='mostrar-comida'>
      <h2>Melhores refeições perto de você</h2>
      <div className="mostrar-comida-list">
        {comida_list.map((item, index) => {
          if (categoria === "Todas" || categoria===item.categoria) {
            return <ItemComida key={index} id={item._id} nome={item.nome} descricao={item.descricao} preco={item.preco} imagem={item.imagem} />

          }
        })}
      </div>
    </div>
  )
}

export default MostrarComida
