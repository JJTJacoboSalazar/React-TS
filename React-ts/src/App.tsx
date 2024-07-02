import { useState } from 'react'

function App() {

  const [number, setNumber] = useState<number>(5)

  const changeNumber = () => {
    setNumber(Math.floor(Math.random() * 10) + 1)
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
