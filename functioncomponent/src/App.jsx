import { useState } from 'react'
import './App.css'

function App(){
  const [data,setData] = useState("")
  return(
    <>
    {/* <h1>Welcome</h1>
    <h2>Python </h2>
    <h1>{count}</h1> */}
    <form >
      <input type="text" name="name" id="name" value={data} onChange={(e)=>setData(e.target.value)} />
    </form>
    <h1>{data}</h1>
    </>
  )
}

export default App