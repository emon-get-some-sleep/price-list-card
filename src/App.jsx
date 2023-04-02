import { useState } from 'react'

import './App.css'
import Navbar from './component/Navbar'
import PriceList from './component/PriceList/PriceList'
import Dashboard from './component/Dashboard/Dashboard'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
      <Navbar></Navbar>

      <h1 className='text-5xl font-bold text-purple-500
      '>hello from tailwind</h1>

      <PriceList></PriceList>

      <Dashboard></Dashboard>
    </div>
  )
}

export default App
