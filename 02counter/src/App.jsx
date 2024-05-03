import './App.css'
import { useState } from 'react'




function App() {

  let [counter , setIncreament] = useState(15)

  const addValue = ()=> {
  console.log('clicked', counter)
    counter = counter + 1
    setIncreament(counter)
  }


  const removeValue = () => {
    setIncreament(counter - 1)
  }
  
  return (
    <>

    <h1>Write code for practice</h1>
    <h3>Counter Value {counter}</h3>
    <button onClick={addValue}
    >Add Value</button>
    <br />
    <button 
    onClick={removeValue}
    >Remove Value</button>
     
    </>
  )
}

export default App
