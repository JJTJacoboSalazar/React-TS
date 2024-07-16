import { useState, useEffect, useRef } from 'react'
import List from './components/List'
import Form from './components/Form'
import { Sub } from './types'


interface AppState {
  subs: Array<Sub>
  newSubsNumber: number
}

function App() {


  const [subs, setSubs] = useState<AppState["subs"]>([])
  const [newSubsNumber, setNewSubsNumber] = useState<AppState["newSubsNumber"]>(0)
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    fetch('http://localhost:3001/subs')
      .then(response => response.json())
      .then((subs: Array<Sub>) =>
         setSubs(subs))
  }, [])

  const handleNewSub = (newSub: Sub): void => {
    setSubs([newSub, ...subs])
    setNewSubsNumber(newSubsNumber + 1)
  }

  return (
      <div className='App' ref={divRef}>
        <h1>Subs</h1>
      <List subs={subs}/>
      <h2>New Subs: {newSubsNumber}</h2>
      <Form onNewSub={handleNewSub} />
      </div>
  )
}

export default App
