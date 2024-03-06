import Portamodelo from '../model/Portamodelo'
interface Portapro{
    porta:Portamodelo
    mudando:(novaPorta:Portamodelo)=>void
}

export default function Porta(props:Portapro){
const {porta}=props
const selecionada=porta.selecionada
const alterar=e =>props.mudando(porta.alterar())
return (<div className={'area'}onClick={alterar}><div className={'selecionada'}><div className={"porta"}><div className={"maçaneta"}></div></div></div></div>)

}
     
