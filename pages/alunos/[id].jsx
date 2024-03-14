export async function getStaticPaths(){

  const  resp = await fetch(`http://localhost:3000/api/alunos/tutores`)
  const ids =await resp.json()
  const paths=ids.map(id=>{return {params: {id}}})
}
return {
  fallback:false,//404
}

