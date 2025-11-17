import { useState } from 'react'
import './App.css'
import Login from './pages/Login';
import Signup from './pages/Signup';
import type { User } from './types/types';
// import Conversations from './components/ConversationsList';
import { mockUser } from './mockData';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { ConversationMessage } from './components/ConversationMessage';
import ConversationScreen from './pages/ConversationScreen';

function App() {
  // const [isloginPage, setIsLoginPage] = useState(false);
  const [user, setUser]  = useState<User | null>(mockUser);

  // const toggleIsLoginPage = () => setIsLoginPage(!isloginPage);

  // return (
  //   !user ? <Conversations /> :
  //   <>
  //     {
  //       isloginPage ? <Login/> : <Signup />
  //     }
  //      <div className="center">
  //         <button
  //             onClick={toggleIsLoginPage}
  //             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 cursor-pointer">
  //           { isloginPage ? "Register an Account" : "Login into Account"}
  //         </button>
  //     </div>
  //   </>
  // )
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/chat/:conversation_id" element={<ConversationScreen />} />
      </Routes>
    </Router>
  )
}

export default App
