import { useState } from 'react'
import NavBar from './components/NavBar/NavBar.jsx'
import ItemListConteiner from './components/ItemListConteiner.jsx'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <NavBar />
       <ItemListConteiner label='Hola soy ItemListConteiner' />
    </>
  )
}

export default App
