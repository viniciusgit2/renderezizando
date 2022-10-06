import { useState } from "react";
import Cliente from "./Cliente";
import Entrada from "./Entrada";

export default function Formulario (){
    
    return(
        <><Entrada type texto={"nome"} onchange></Entrada><Entrada texto="idade"tipo={"number"}></Entrada></>
            )
            }