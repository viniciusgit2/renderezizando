import Contador from "../pages/estado/Contador";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import mega from "../pages/mega/mega";
import metodo from "../pages/api/metodo";
import Presente from '../components/Presente'
export default function Home() {
  return (
    <div>
      <Link href="mega/mega">megacena</Link>
      <Link href="estado/contador">,contador</Link>
      <Link href="api/metodo">,metodo</Link>
      <Link href='components/Presente'></Link>
    </div>
  );
}
