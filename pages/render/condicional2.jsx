import IF from "../../components/IF";
export default function condicional2(props){
    const numero=2
    return <IF teste={numero%2===0}>
        <h1>
            o numero é par 
        </h1>
    </IF>
}