import  Header  from "./components/Header"
import  PokeCard  from "./components/PokeCard"
import  SideNav  from "./components/SideNav"
import  {useState}  from "react"
function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(0);
  const [showSideMenu,setShowSideMenu]=useState(true)
  function handleToggle(){
    setShowSideMenu(!showSideMenu)
  }
  function setFalse(){
    setShowSideMenu(true)
  }
  return (
    <>
    <Header 
    handleToggle ={handleToggle} />
    <SideNav  
    showSideMenu={showSideMenu}
    selectedPokemon={selectedPokemon}
      setSelectedPokemon={setSelectedPokemon}
      setShowSideMenu ={setShowSideMenu}
      setFalse={setFalse}/>
      
      
    <PokeCard selectedPokemon={selectedPokemon}  />

    </>
  )
}

export default App
