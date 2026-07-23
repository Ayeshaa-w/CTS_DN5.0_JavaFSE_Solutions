import UserContext from "./UserContext";
import Home from "./components/Home";

function App() {

  const username = "AYESHA ZAFREEN S";

  return (

    <UserContext.Provider value={username}>

      <Home />

    </UserContext.Provider>

  );
}

export default App;