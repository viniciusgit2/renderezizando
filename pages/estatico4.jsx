export async function getStaticProps(){
   const resp=await fetch("http://localhost:3000/api/produtos")//repare o localhost esta 3002 ou 3000 pra funcionar so vai ir de segunda ou de primeira
   //e com 2 com api produtos aberta
   console.log('{server....} gerando props para o componente ...')//teste para ver se no server gerava ou não
    const produtos=await resp.json()
    return{
        props:{
            produtos
        }
    }
}

export default function Estatico4(props){
    console.log('{cliente....} gerando props para o componente ...')//teste para ver se no server gerava ou não

    function renderizar(){
        return props.produtos.map(produto =>{return <li key={produto.id}>{produto.nome}=r${produto.preco}</li>})
    }
return(<div><h1>estatico4</h1><h2>{renderizar()}</h2></div>)
}
