import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from './context/UserContext'

const Home = () => {
    /* const user = useContext(UserContext) */
    const [user, setUser] = useContext(UserContext)
  return (
    <div className='flex flex-col items-center'>
        <div className='flex flex-row items-center gap-4'><h1 className='text-xl mt-4 mb-2'>{user}'s Home</h1></div>
        <button className='text-xs border bg-blue-500 text-white py-1 px-2 rounded-lg'
        type='buttom'
        onClick={()=>setUser("Alan")}>Edit name</button>
      
      <Link to ="/dashboard" className='text-indigo-500
      hover:opacity-80'>Your Dashboard</Link>
      <Link to ="/recommendations" 
      className="text-indigo-400"
      >Your Recommendations</Link>
      <Link to ="/podcast" 
      className='text-indigo-400'>Your Podcasts</Link> 
    </div>
  )
}

export default Home
