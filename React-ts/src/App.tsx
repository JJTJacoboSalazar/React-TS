import { useState } from 'react'

function App() {

  interface Sub {
    nick: string
    subMonths: number
    avatar: string
    description?: string
  }

  const [subs, setSubs] = useState<Array<Sub>>([])


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
