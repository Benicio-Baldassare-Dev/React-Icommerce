import { useState } from 'react'
import NavBar from './components/NavBar/NavBar.jsx'
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner.jsx'
import ItemsFilter from './components/ItemsFilter/ItemsFilter.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailConteiner from './components/ItemDetailConteiner/ItemDetailConteiner.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
       <BrowserRouter>
         <NavBar/>
         <Routes>
              <Route path="/" element={<><ItemsFilter/><ItemListConteiner /></>} />
              <Route path='/category/:categoryId' element={<><ItemsFilter/><ItemListConteiner /></>} />
              <Route path='/item/:id' element={<ItemDetailConteiner />} />
              <Route path='/about' element={<div>About</div>} />
              <Route path='/contact' element={<div>Contact</div>} />
         </Routes>
       </BrowserRouter>
  )
}

export default App


