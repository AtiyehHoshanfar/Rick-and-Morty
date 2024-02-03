import  { createContext, useContext, useState } from 'react'
const CharacterContext=createContext()
function CharacterProvider({children}) {
    const [selectedCharacterId,setSelectedCharacterId]=useState(null);
  return (<CharacterContext.Provider value={{selectedCharacterId,setSelectedCharacterId}}>
    {children}
    </CharacterContext.Provider>
  )
}

export const useCharacter=()=>{
    return useContext(CharacterContext)
}
export default CharacterProvider