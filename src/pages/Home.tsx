import ConversationsList from "../components/ConversationsList";
import NavBar from "../components/Navbar";


const Home = () => {

    return (
        <>
            <NavBar title="Conversations" />
            <ConversationsList />
        </>
    )
}


export default Home;