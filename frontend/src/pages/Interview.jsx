import {useState} from "react"
import axios from "../api/axios"

function Interview(){

 const [role,setRole] = useState("")
 const [questions,setQuestions] = useState("")

 const generate = async()=>{

  const res = await axios.post("/ai/generate",{role})

  setQuestions(res.data)

 }

 return(

  <div>

   <h2>AI Interview Questions</h2>

   <input
    placeholder="role"
    onChange={e=>setRole(e.target.value)}
   />

   <button onClick={generate}>
    Generate Questions
   </button>

   <pre>{questions}</pre>

  </div>

 )

}

export default Interview