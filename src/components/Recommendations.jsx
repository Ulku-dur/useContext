import React, { useContext } from 'react'
import { UserContext } from './context/UserContext'

const Recommendations = () => {
    const user = useContext(UserContext)
  return (
    <div>
      <h1>Hello {user}</h1>
    </div>
  )
}

export default Recommendations
