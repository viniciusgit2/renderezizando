import Contador from "../pages/estado/Contador";
import Link from "next/link";
import mega from "../pages/mega/mega";
import Presente from "../components/Presente";
import Porta from "../components/Porta";
import Porta2 from "../components/Porta2";
import Portamodelo from "../model/Portamodelo";
import { useState } from "react";
export default function Home() {
  const [p1,setp1]=useState(new Portamodelo(1))
  //const p2 = new Portamodelo(2)
  return (
    <div>
      <Link href="estado/contador">,contador</Link>
      <Link href="api/metodo">,metodo</Link>
      <Link href='mega/mega'>,megacena</Link>
      <Link href='estado/Contador'>,contador</Link>
      <Presente/>  
      <Porta porta={p1} mudando={novaPorta=>console.log(novaPorta)}/>   
    

        <Porta2/>
    </div>
  );
}
