import { useState } from 'react'

function App() {

  const [subs, setSubs] = useState([
    {
      nick: 'Pablo',
      subMonths: 3,
      avatar: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200',
      description: 'Pablo is a moderator in the chat'
    },
    {
      nick: 'Juan',
      subMonths: 5,
      avatar: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200',
      description: 'Juan is a subscriber'
    },
    {
      nick: 'Pedro',
      subMonths: 1,
      avatar: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200',
      description: 'Pedro is a subscriber'
    }
  ])


  return (
      <div>
        <h1>React Typescript</h1>
      
      </div>
  )
}

export default App
