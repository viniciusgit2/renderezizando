import { useState } from "react";
import Tabela from "./Tabela";
import Formulario from "./Formulario";
import Entrada from "./Entrada";
import Titulo from "./Titulo";
import Cliente from "./Cliente";
import Botoes from "./Botoes";
export default function  rediricionamento(){
    const  [visivel, setvisivel]=useState<'tabela' | 'formulario'>("tabela")
    return(
   <Botoes cor="red" onclick={Tabela}></Botoes> 
   
        
    
    )

}
