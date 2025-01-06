import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar.jsx'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'

function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navbar/>}>
      <Route index element={<Home/>} />
      <Route path='About' element={<About/>} />
      </Route>
    </Routes>
    </BrowserRouter>
  )

}
export default App