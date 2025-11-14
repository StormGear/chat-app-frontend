import { useState } from 'react'
import './App.css'
import Login from './components/Login';
import Signup from './components/Signup';
import type { User } from './types';
import Conversations from './components/ConversationsList';
import { mockUser } from './mockData';

function App() {
  const [isloginPage, setIsLoginPage] = useState(false);
  const [user, setUser]  = useState<User | null>(mockUser);

  const toggleIsLoginPage = () => setIsLoginPage(!isloginPage);

  return (
    !user ? <Conversations /> :
    <>
      {
        isloginPage ? <Login/> : <Signup />
      }
      <div className='center'>
        <button onClick={
          toggleIsLoginPage
        }><a>{ isloginPage ? "Register an Account" : "Login into Account"}</a></button>
      </div>
    </>
  )
}

export default App
