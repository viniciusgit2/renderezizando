import Cliente from "./Cliente"

 export interface EntradaProps{
tipo:'text'
texto:string
valor:any
}
export default function Entrada(props:EntradaProps){
return (
    <div>
        <label>
            {props.texto}
        </label>
        <input type={props.tipo ??"text" } value={props.valor}></input>
    </div>
)
}