
import Cliente from "./cliente"
import Botaodeletar from "./Botaodeletar"
import Botaoeditar from "./Botaoeditar"
import React from "react"
import Titulo from "./Titulo"
 export default function tabela (){
return <table><Titulo/> <tr><Botaodeletar/><th></th></tr><tr><Botaoeditar/></tr><tr>dados<td><Cliente/></td></tr><tr><td>campos</td><td>id</td><td>idade</td><td>nome</td></tr></table>
 }