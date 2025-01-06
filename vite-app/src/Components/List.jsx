import { useEffect, useState } from "react"
import axios from 'axios'
function List(){
    const [data,setData]= useState([])
    const [editing,setEditing]= useState(false)
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/todo/').then((res)=>{
            console.log(res.data)
            setData(res.data)
            
        }).catch(error=>console.log(error.message))

    },[])

    const EditFun =(task)=>{
        setEditing(true)
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
                            <td><button  className="btn btn-outline-danger" onClick={()=>{}}>Delete</button></td>

                        </tr>
                    ))}
                </tbody>
            </table>
            <div className=" container">
                    { editing ? <EditForm/>:null }
            </div>
        </div>
    )
}

const EditForm =()=>{
    return(
        <form>
            <input className="form-control input-sm" type="text" name="task" id="task" /> 
            <input className="form-control input-sm" type="text" name="descri" id="descri" />
            <input className="form-control input-sm  btn btn-info " type="submit"/>

        </form>
    )
}

export default List