import { Component } from "react" ;
import './App.css'

class App extends Component{
  constructor(props){
    super()
    this.state ={
      count : props.start || 0
  }
}
  increment=()=>{
      this.setState((prv)=>({count:prv.count+1}))
  }


  decriment=()=>{
    this.setState((prv)=>({count:prv.count>0 ? prv.count-1:0}))
}
//  decriment=()=>{
//     this.setState((prv)=>{
//       if(prv.count>0)
//       return {count:prv.count-1}
  
//     })
// }
  render(){
    return(
      <div>
        <button onClick={this.decriment}>-</button><h1>{this.state.count}</h1><button onClick={this.increment}>+</button>
      </div>
    )
  }
} 

export default App