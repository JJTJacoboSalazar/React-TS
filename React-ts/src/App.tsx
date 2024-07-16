import { useState, useEffect, useRef } from 'react'
import List from './components/List'
import Form from './components/Form'
import { Sub, SubsReponseFromApi } from './types'
import axios from 'axios'
import './App.css'


interface AppState {
  subs: Array<Sub>
  newSubsNumber: number
}

function App() {


  const [subs, setSubs] = useState<AppState["subs"]>([])
  const [newSubsNumber, setNewSubsNumber] = useState<AppState["newSubsNumber"]>(0)
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fetchSubs = (): Promise<SubsReponseFromApi> => {
      return axios.get('http://localhost:8000/subs')
        .then((res) => res.data)
    }
  
    const mapFromApiToSubs = (apiSubs: SubsReponseFromApi): Array<Sub> => {
      return apiSubs.map((sub) => {
        const {nick, months, profileUrl, description} = sub
        return {
          nick,
          subMonths: months,
          avatar: profileUrl,
          description
        }
      })
    }
  
    fetchSubs().then((subs) => {
      setSubs(mapFromApiToSubs(subs))
    })
  
  }, [])


  const handleNewSub = (newSub: Sub): void => {
    setSubs([newSub, ...subs])
    setNewSubsNumber(newSubsNumber + 1)
  }

  return (
      <div className="App" ref={divRef}>
        <h1>Subs</h1>
      <List subs={subs}/>
      <h2>New Subs: {newSubsNumber}</h2>
      <Form onNewSub={handleNewSub} />
      </div>
  )
}

export default App
