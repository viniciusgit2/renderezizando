
import Cliente from "./Cliente"
import Botoes from "./Botoes"
import Botaoeditar from "./Botoes"
import React from "react"
import Titulo from "./Titulo"
 export default function tabela (){
return <table><Titulo/> <tr><th></th><Botaoeditar/><th></th></tr><tr></tr><tr>dados<td><Cliente/></td></tr><tr><td>campos</td><td>id</td><td>idade</td><td>nome</td></tr></table>
 }