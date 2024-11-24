import React, { useContext} from 'react'
import './ItemComida.css'
import { assets } from '../../assets/assets'
import { LojaContext } from '../../context/LojaContext'

const ItemComida = ({id,nome,preco,descricao,imagem}) => {

    const{Itemcarrinho,adicionarProCarrinho,removerDoCarrinho} = useContext(LojaContext);

    return (
        <div className='item-comida'>
            <div className='item-comida-img-container'>
                <img className='item-comida-imagem' src={imagem} alt="" />
                {!Itemcarrinho[id]
                  ?<img className='adiciona' onClick={()=>adicionarProCarrinho(id)}  src={assets.add_icon_white} alt="" />  
                    :<div className='item-comida-contagem'>
                        <img onClick={()=>removerDoCarrinho(id)} src={assets.remove_icon_red} alt="" />
                        <p>{Itemcarrinho[id]}</p>
                        <img onClick={()=>adicionarProCarrinho(id)} src={assets.add_icon_green} alt="" />
                    </div> 
                }
            </div>
            <div className="item-comida-info">
                <div className="item-comida-nome-avaliacao">
                    <p>{nome}</p>
                    <img src={assets.estrelas_avaliacao} alt="" />
                </div>
                <p className="item-comida-desc">{descricao}</p>
                <p className="item-comida-preco">R${preco}</p>
            </div>
        </div>
    )
}

export default ItemComida
