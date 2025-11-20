import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

interface NavBarProps {
    activeTab: 'dm' | 'group';
    setActiveTab: (tab: 'dm' | 'group') => void;
}

const NavBar = ({ activeTab, setActiveTab }: NavBarProps) => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

     const handleLogout = async (e: React.FormEvent) => {
      e.preventDefault();

     try {
         logout();
         navigate("/");
     } catch (error) {
       console.error('Error during login', error);
     }
    };
     
    return (<div className="flex justify-between items-center bg-amber-600 p-4 shadow-lg">
      <div className="flex space-x-6">
        <button
          onClick={() => setActiveTab('dm')}
          className={`text-xl font-semibold ${
            activeTab === 'dm' ? 'border-b-4 border-black' : ''
          }`}
        >
          Direct Messages
        </button>

        <button
          onClick={() => setActiveTab('group')}
          className={`text-xl font-semibold ${
            activeTab === 'group' ? 'border-b-4 border-black' : ''
          }`}
        >
          Groups
        </button>
      </div>

      
      <div className="flex items-center space-x-4">
        <p className="font-bold text-white">Logged In as { user?.username }</p>
        <button className="bg-black text-white px-4 py-2 rounded cursor-pointer" onClick={handleLogout}>Logout</button>
      </div>
    </div>);
}


export default NavBar;