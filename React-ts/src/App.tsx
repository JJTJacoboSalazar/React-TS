import { useState, useEffect } from 'react'
import List from './components/List'

const initial_state = [
  {
    nick: 'Nick',
    subMonths: 1,
    avatar: 'https://gravatar.com/avatar/1?d=identicon',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et nisl nec justo ultricies fermentum. Sed vel sapien ac nisi mattis tincidunt. Maecenas sit amet nunc et libero convallis malesuada'
  },
  {
    nick: 'John',
    subMonths: 2,
    avatar: 'https://gravatar.com/avatar/2?d=identicon',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et nisl nec justo ultricies fermentum. Sed vel sapien ac nisi mattis tincidunt. Maecenas sit amet nunc et libero convallis malesuada'
  },
  {
    nick: 'Juan',
    subMonths: 3,
    avatar: 'https://gravatar.com/avatar/3?d=identicon',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et nisl nec justo ultricies fermentum. Sed vel sapien ac nisi mattis tincidunt. Maecenas sit amet nunc et libero convallis malesuada'
  },

]

interface Sub {
  nick: string
  subMonths: number
  avatar: string
  description?: string
}

interface AppState {
  subs: Array<Sub>
  newSubsNumber: number
}

function App() {


  const [subs, setSubs] = useState<AppState["subs"]>([])
  const [newSubsNumber, setNewSubsNumber] = useState<AppState["newSubsNumber"]>(0)

  useEffect(() => {
    setSubs(initial_state)
  }, [])


  return (
      <div>
        <h1>Subs</h1>
      <List subs={subs}/>
      </div>
  )
}

export default App
