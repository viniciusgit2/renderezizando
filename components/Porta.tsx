import Portamodelo from '../model/Portamodelo'
interface Portapro{
    valor:Portamodelo
    mudando:(novaPorta:Portamodelo)=>void
}

export default function Porta(props:Portapro){
const porta=props.valor
const selecionada=porta.selecionada
return (<div className='area'><div className='{estrutura,selecionada}'><div className='selecionada'><div className='porta'><div className='maçaneta'></div></div></div></div></div>)
}

     
