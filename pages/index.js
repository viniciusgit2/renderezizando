import Contador from "../pages/estado/Contador";
import Link from "next/link";
import mega from "../pages/mega/mega";
import Presente from "../components/Presente";
import Porta from "../components/Porta";
export default function Home() {
  return (
    <div>
      <Link href="mega/mega">megacena</Link>
      <Link href="estado/contador">,contador</Link>
      <Link href="api/metodo">,metodo</Link>
      <Link href='mega/mega'>megacena</Link>
      <Link href='estado/Contador'>contador</Link>
        <Presente/>     
        <Porta/>
    </div>
  );
}
