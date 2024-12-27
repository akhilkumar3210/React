import { useState } from 'react'
import './App.css'

function App(){
  const [data,setData] = useState([])
  const [formData,setFormData] = useState({name:"",age:""})

  const handleChanger =(e)=>{
     const {name,value} = e.target
     setFormData((prv)=>({...prv,[name]:value}))
     console.log(formData);
     
  }

  const handleSubmit =(e)=>{
    e.preventDefault()
    setData((prv)=>[...prv,formData])
    setFormData({name:"",age:""})
    console.log(data);
    
  }

  return(
    <>
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" id="name" value={formData.name} onChange={handleChanger} />
      <input type="number" name="age" id="age" value={formData.age} onChange={handleChanger} />
      <input type="submit" value="Add" />
    </form>
    <table>
      <tr>
        <th>Name</th>
        <th>Age</th>
      </tr>
      {data.map((value,index)=>(
        <tr key={index}>
          <td>{value.name}</td>
          <td>{value.age}</td>
        </tr>
      ))}
    </table>
    </>
  )
}
export default App