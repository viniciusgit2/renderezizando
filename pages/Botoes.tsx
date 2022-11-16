import React from "react";


interface Botaoprops{
onclick():void
 cor:"green"
}

export default function Botoes (props:Botaoprops){
  
  return(
    <><button onClick={props.onclick} className={'bg-gradient-to-r from to-blue-400,to r- from -${cor}  text-justify border-l-blue-700 text-white px-4 py-2 rounded-full'}> falso editar</button><button className="bg-gray-900 to-red-900 text-center">falso deletar</button></>
  )
  

    }