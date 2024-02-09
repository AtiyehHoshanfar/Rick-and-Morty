import { createContext, useContext, useState } from "react";
const CharacterContext = createContext();
function CharacterProvider({ children }) {
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [favoriteCharacters, setFavoriteCharacters] = useState(
    JSON.parse(localStorage.getItem("FAVORITES")) || []
  );
  localStorage.setItem("FAVORITES", JSON.stringify(favoriteCharacters));
  return (
    <CharacterContext.Provider
      value={{
        selectedCharacter,
        setSelectedCharacter,
        favoriteCharacters,
        setFavoriteCharacters,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
}

export const useCharacter = () => {
  return useContext(CharacterContext);
};
export default CharacterProvider;
