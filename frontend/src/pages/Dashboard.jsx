import {useEffect,useState} from "react"
import axios from "../api/axios"

function Dashboard(){

 const [sessions,setSessions] = useState([])

 useEffect(()=>{

  axios.get("/sessions",{
   headers:{
    authorization:localStorage.getItem("token")
   }
  }).then(res=>{
   setSessions(res.data)
  })

 },[])

 return(

  <div>

   <h2>Your Sessions</h2>

   {sessions.map(s=>(
    <div key={s._id}>
     {s.role} - {s.experience} yrs
    </div>
   ))}

  </div>

 )

}

export default Dashboard