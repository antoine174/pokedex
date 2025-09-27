import { useState } from "react"
import { first151Pokemon, getFullPokedexNumber } from "../utils"  
export default function SideNav(props) {
    const {selectedPokemon,setSelectedPokemon,showSideMenu,setFalse} = props
    const [searchValue,setSearchValue]=useState('');
    const filteredPokemon=first151Pokemon.filter((ele,eleIndex)=>{

        if(getFullPokedexNumber(eleIndex).includes(searchValue) ){return true}

        if(ele.toLowerCase().includes(searchValue.toLowerCase())){return true}

        return false

    })
    return (
        <nav className={' ' + (!showSideMenu? ' open':' ')}>
            <div className={"header " + (!showSideMenu? ' open':' ') }>
                <button onClick={setFalse} className="open-nav-button">
                    <i className="fa-solid fa-arrow-left-long"></i>
                </button>
                <h1  className={"text-gradient"}>Pokédex</h1>

            </div>
            <input placeholder="E.g 001 or bulba..." value={searchValue} onChange={(e)=>{
                setSearchValue(e.target.value)
            }} />
            {filteredPokemon.map((pokemon,pokemonIndex)=>{
                const truePokemonIndex=first151Pokemon.indexOf(pokemon)
            return(

                <button onClick={()=>{
                    setSelectedPokemon(truePokemonIndex)
                    setFalse()
                }}    key={pokemonIndex} className={'nav-card' + (truePokemonIndex===selectedPokemon? ' nav-card-selected': ' ')}>
                    <p>{getFullPokedexNumber(truePokemonIndex)}</p>
                    <p>{pokemon}</p>
                </button>
            )
            
            })
        }
        </nav>
    )
}
