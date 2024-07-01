import { useState } from 'react'

function App() {

  const [number, setNumber] = useState<number | string>(5)

  const changeNumber = () => {
    setNumber("3")
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
