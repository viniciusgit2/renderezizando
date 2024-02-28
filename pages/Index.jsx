import Link from "next/link"
import Desafio from "./Desafio"
import Titulo from './Titulo'
export default function Rotas(){
    return (<div><ul><li><Link href='Desafio'>desafio</Link></li><li><Link href='Titulo'>titulo</Link></li></ul><ul></ul></div>)
}