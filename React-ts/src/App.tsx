import { useState } from 'react'

function App() {

  const [number, setNumber] = useState(5)

  const changeNumber = () => {
    setNumber(number + 1)
  }

  return (
      <div>
        <h1>React Typescript</h1>
        <h2>{number}</h2>
        <button onClick={changeNumber}>Change Number</button>
      </div>
  )
}

export default App
