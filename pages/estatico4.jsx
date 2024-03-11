export async function getStaticProps(){
   const resp=await fetch("http://localhost:3002/api/produtos")//repare o localhost esta 3002 pra funcionar so vai ir de segunda
   //e com 2 com api produtos aberta
    const produtos=await resp.json()
    return{
        props:{
            produtos
        }
    }
}

export default function Estatico4(props){
    function renderizar(){
        return props.produtos.map(produto =>{return <li key={produto.id}>{produto.nome}=r${produto.preco}</li>})
    }
return(<div><h1>estatico4</h1><h2>{renderizar()}</h2></div>)
}
