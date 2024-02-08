import  { createContext, useContext, useState } from 'react'
const CharacterContext=createContext()
function CharacterProvider({children}) {
    const [selectedCharacterId,setSelectedCharacterId]=useState(null);
    const [favoriteCharacters, setFavoriteCharacters] = useState(JSON.parse(localStorage.getItem("FAVORITES"))||[]);
    localStorage.setItem("FAVORITES",JSON.stringify(favoriteCharacters));
  return (<CharacterContext.Provider value={{selectedCharacterId,setSelectedCharacterId,favoriteCharacters,setFavoriteCharacters}}>
    {children}
    </CharacterContext.Provider>
  )
}

export const useCharacter=()=>{
    return useContext(CharacterContext)
}
export default CharacterProvider