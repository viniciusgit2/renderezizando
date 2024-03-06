import Contador from "../pages/estado/Contador";
import Link from "next/link";
import mega from "../pages/mega/mega";
import Presente from "../components/Presente";
import Porta from "../components/Porta";
import Porta2 from "../components/Porta2";
export default function Home() {
  return (
    <div>
      <Link href="estado/contador">,contador</Link>
      <Link href="api/metodo">,metodo</Link>
      <Link href='mega/mega'>,megacena</Link>
      <Link href='estado/Contador'>,contador</Link>
      <Presente/>  
      <Porta/>   
        <Porta2/>
    </div>
  );
}
