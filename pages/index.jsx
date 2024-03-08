import Contador from "../pages/estado/Contador";
import Link from "next/link";
import mega from "../pages/mega/mega";
import Presente from "./Presente";
import Porta from "./Porta";
import { useState } from "react";
import Subdivisao from '../pages/tabuleiro/componentes/Subdivisao'
export default function Home() {
  return (
    <div>
      <Link href="estado/contador">,contador</Link>
      <Link href="api/metodo">,metodo</Link>
      <Link href='mega/mega'>,megacena</Link>
      <Link href='estado/Contador'>,contador</Link>
       <Link href='tabuleiro/componentes/Subdivisao'>tabuleiro</Link>
      <Porta />   
    

     
    </div>
  );
}
