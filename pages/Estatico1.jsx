
export default function estatico1(){
    const [num,setnum]=useState(0)
    useEffect(()=>{setnum(Math.random())},{})
  return(<div><h1> estatico</h1>

  </div>)    
}