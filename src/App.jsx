import { Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './paginas/Dashboard'


const ListaItems = ({title, name})=> {
  return (
  <>
    <div>Este es mi componente {title}</div>
    <div>Me llamo {name}</div>
  </>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Dashboard/>
    </>
  )
}

export default App
