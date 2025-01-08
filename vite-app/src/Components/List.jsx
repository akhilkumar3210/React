import { useEffect, useState } from "react"
import axios from 'axios'
import Add from './Add'
function List(){
    const [data,setData]= useState([])
    const [editing,setEditing]= useState(false)
    const [editData,setEditData]=useState(null)
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/todo/').then((res)=>{
            console.log(res.data)
            setData(res.data)
            
        }).catch(error=>console.log(error.message))

    },[])

    const EditFun =(task)=>{
        setEditing(true)
        setEditData(task)
    }
    const updateFun= (id,task)=>{
        setEditing(false)
        axios.put(`http://127.0.0.1:8000/api/todo/${id}/`,task).then((res)=>{
            setData(data.map((tasks)=>(id===tasks ? res.data :tasks)))
        }).catch(error=>console.log(error.message))
    }
    const deleteFun=(id)=>{
        axios.delete(`http://127.0.0.1:8000/api/todo/${id}/`).then((res)=>{
            setData(data.filter((task)=>task.id!==id))
        }).catch(error=>console.log(error.message))
    }
    return(
        <div className="container">
            <h3>To-do</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Task</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((value,index)=>(
                        <tr key={index}>
                            <td>{value.task}</td>
                            <td>{value.descri}</td>
                            <td><button  className="btn btn-outline-success" onClick={()=>{EditFun(value)}}>Edit</button></td>
                            <td><button  className="btn btn-outline-danger" onClick={()=>{deleteFun(value.id)}}>Delete</button></td>

                        </tr>
                    ))}
                </tbody>
            </table>
            <div className=" container-1">
                    { editing ? <EditForm curTask={editData} updateFunction={updateFun}/> : <Add/> }
            </div>
        </div>
    )
}

const EditForm =({curTask,updateFunction})=>{
    const [task,setTask] = useState(curTask)
    const handleChange = (e)=>{
        const {name,value}=e.target
        setTask({...task,[name]:value})
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        updateFunction(task.id,task)

    }
    return(
        <form onSubmit={handleSubmit}>
            <input className="form-control input-sm" type="text" name="task" id="task" value={task.task} onChange={handleChange } /> 
            <input className="form-control input-sm" type="text" name="descri" id="descri" value={task.descri} onChange={handleChange} />
            <input className="form-control input-sm  btn btn-info " type="submit"/>

        </form>
    )
}

export default List