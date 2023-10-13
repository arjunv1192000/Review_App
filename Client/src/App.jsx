import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landingpage from './Pages/Landingpage'
import Reviewpage from './Pages/Reviewpage'
import Homepage from './Pages/Homepage'



function App() {
  

  return (
    <>
     <BrowserRouter>
     <Routes>
     <Route path='/' element={<Landingpage/>} />
     <Route path='/Reviewform' element={<Reviewpage/>} />
     <Route path='/home' element={ <Homepage/>} />
     </Routes>
     </BrowserRouter>
   
    
    
   
    
      
    </>
  )
}

export default App
