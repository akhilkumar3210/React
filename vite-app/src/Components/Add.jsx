import axios from "axios"
import { useState } from "react"

function Add(){
    const [task,setTask] = useState('')
    const [descri,setDescri] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.post('http://127.0.0.1:8000/api/todo/',{task,descri}).then((res)=>{
            setTask('')
            setDescri('')
        }).catch(error=>console.log(error.message))
    }
    return(
        <form onSubmit={handleSubmit}>
            <input className="form-control input-sm" type="text" name="task" id="task" value={task} onChange={(e)=>setTask(e.target.value)} /> 
            <input className="form-control input-sm" type="text" name="descri" id="descri" value={descri} onChange={(e)=>setDescri(e.target.value)} />
            <input className="form-control input-sm  btn btn-info " type="submit" value="Add"/>
        </form> 
    )

}
export default Add