import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import DashBoard from './Components/DashBoard'
import Create from './Components/Create'
import Edit from './Components/Edit'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<DashBoard/>}/>
          <Route path='/create' element={<Create/>}/>
          <Route path='/edit/:id' element={<Edit/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
