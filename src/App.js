import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Podcast from './components/Podcast';
import Recommendations from './components/Recommendations';
import { UserContext } from './components/context/UserContext';
import Home from './components/Home';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState("ülkü")
  return (
    <>
     <Router>
      {/* <UserContext.Provider value={user}> */}
      <UserContext.Provider value={[user, setUser]}>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/podcast' element={<Podcast/>} />
        <Route path='/recommendations' element={<Recommendations/>}/>
      </Routes>
      </UserContext.Provider>
     </Router>
    </>
  );
}

export default App;
