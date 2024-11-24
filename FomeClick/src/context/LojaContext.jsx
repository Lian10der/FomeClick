import { createContext, useEffect, useState } from "react";
import { comida_list } from "../assets/assets";

export const LojaContext = createContext(null)

const LojaContextProvider = (props) => {

    const[Itemcarrinho,setItemCarrinho] = useState({});

    const adicionarProCarrinho = (itemId) => {
        if (!Itemcarrinho[itemId]){ 
            setItemCarrinho((prev)=>({...prev,[itemId]:1}))
        } 
        else{
            setItemCarrinho((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }

    const removerDoCarrinho = (itemId) => {
        setItemCarrinho((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    } 

    useEffect(()=>{
        console.log(Itemcarrinho)
    },[Itemcarrinho])

    const contextValue = {
        comida_list,
        Itemcarrinho,
        setItemCarrinho,
        adicionarProCarrinho,
        removerDoCarrinho
    }
    
    return(
        <LojaContext.Provider value={contextValue}>
            {props.children}
        </LojaContext.Provider>
    )
}

export default LojaContextProvider;