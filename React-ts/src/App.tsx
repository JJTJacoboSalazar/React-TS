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
        <h1>Subs</h1>
        {subs.map(sub => (
          <div key={sub.nick}>
            <h2>{sub.nick}</h2>
            <p>{sub.subMonths} months</p>
            <p>{sub.description?.substring(0,100)}</p>
            <img src={sub.avatar} alt={sub.nick} />
          </div>
        ))}
      </div>
  )
}

export default App
