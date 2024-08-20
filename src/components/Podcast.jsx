import React, { useContext } from 'react'
import { UserContext } from './context/UserContext'

const Podcast = () => {
    const user = useContext(UserContext)
  return (
    <div>
        <h1>Hello {user}</h1>
      <h2>{user} ' s podcast</h2>
    </div>
  )
}

export default Podcast
