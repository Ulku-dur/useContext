import React, { useContext } from 'react'
import { UserContext } from './context/UserContext'

const Dashboard = () => {
  const user = useContext(UserContext)
  return (
    <div>
     <h2>Hello {user}</h2>
    </div>
  )
}

export default Dashboard
