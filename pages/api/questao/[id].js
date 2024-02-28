export default function questao(req,res){
if(req.method==='GET'){
    const id =req.query.id
    res.status(200).json({ id,
        enunciado:"qual é a sua cor favorita?"
,respotas:['branca','preta','vermelha','azul']} )
}else{
res.status(405).send()
}
}
