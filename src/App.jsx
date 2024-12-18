
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './Components/Login/Login'

function App() {
 

  return (
    
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/signup' element={<SignUp/>}/>
          </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App
