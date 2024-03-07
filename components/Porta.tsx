 export interface Portapro {
    teste: 1;
  }
  export default function  Porta(props: Portapro) {
    return (
      <div className="porta">
        <div className="selecionada"></div>
         <button className="maçaneta">{props.teste}1</button>
      </div>
    );
  }