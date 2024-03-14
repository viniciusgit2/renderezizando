export function getStaticPaths(){
return{
  fallback:false,//404
  paths:[
    
   {params:{id:`123`}},//é so acertar o id
  {  params:{id:`1`}},
  { params:{id:`2`},}
   
  ]
}
  
}
export async function getStaticProps(context){
  const resp= await fetch(`http://localhost:3001/alunos${context.params.id}`)
  
  return {
    props:{}
  }

}
export default function id(){
return ("oi")
}