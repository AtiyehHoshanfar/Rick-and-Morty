import { createContext, useContext, useState } from "react";
const EpisodeContext = createContext();
function EpisodeProvider({ children }) {

  const [favoriteEpisodes, setFavoriteEpisodes] = useState(
    JSON.parse(localStorage.getItem("FAVORITES-EPISODES")) || []
  );
  localStorage.setItem("FAVORITES-EPISODES", JSON.stringify(favoriteEpisodes));
  return (
    <EpisodeContext.Provider
      value={{
        favoriteEpisodes,
        setFavoriteEpisodes,

      }}
    >
      {children}
    </EpisodeContext.Provider>
  );
}

export const useEpisode = () => {
  return useContext(EpisodeContext);
};
export default EpisodeProvider;
