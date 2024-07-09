import { useState, useEffect } from 'react'

const initial_state = [
  {
    nick: 'Nick',
    subMonths: 1,
    avatar: 'https://via.placeholder.com/150',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et nisl nec justo ultricies fermentum. Sed vel sapien ac nisi mattis tincidunt. Maecenas sit amet nunc et libero convallis malesuada'
  },
  {
    nick: 'Nick2',
    subMonths: 2,
    avatar: 'https://via.placeholder.com/150',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et nisl nec justo ultricies fermentum. Sed vel sapien ac nisi mattis tincidunt. Maecenas sit amet nunc et libero convallis malesuada'
  },
  {
    nick: 'Nick3',
    subMonths: 3,
    avatar: 'https://via.placeholder.com/150',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et nisl nec justo ultricies fermentum. Sed vel sapien ac nisi mattis tincidunt. Maecenas sit amet nunc et libero convallis malesuada'
  },

]

interface Sub {
  nick: string
  subMonths: number
  avatar: string
  description?: string
}

function App() {


  const [subs, setSubs] = useState<Array<Sub>>([])

  useEffect(() => {
    setSubs(initial_state)
  }, [])


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
