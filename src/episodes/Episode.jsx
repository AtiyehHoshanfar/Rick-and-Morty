import { useEpisode } from "../context/EpisodeProvider";
import { BsFillTrash3Fill } from "react-icons/bs";

function Episode({ episode, children, favoriteItem,onHandleDelete }) {
  const { favoriteEpisodes, setFavoriteEpisodes } = useEpisode();

  const handleAddToFavoriteEpisodes = (episode) => {
    setFavoriteEpisodes((prevEpisodes) => [...prevEpisodes, episode]);
  };
  const episodeNum = episode.episode.slice(1).split("E");
  return (
    <div className="flex justify-between items-center bg-slate-300 dark:bg-slate-700 rounded-lg  p-2 m-2">
<div>
<div className="flex mb-1">
        <button
          style={{ fontSize: "1.6rem" }}
          onClick={() => handleAddToFavoriteEpisodes(episode)}
          disabled={favoriteEpisodes.find(
            (favoriteEpisode) => favoriteEpisode.id === episode.id
          )}
        >
          {children}
        </button>
        &nbsp;
        <div className="flex flex-col">
          <span>
            episode #{episodeNum[0]}&bull;{episodeNum[1]}
          </span>
          <span className="font-thin text-sm">{episode.air_Date}</span>
        </div>
      </div>
      <div className="font-bold text-md">
        {episode.episode} &bull; {episode.name}
      </div>
</div>
      {favoriteItem === "episode" && (
        <BsFillTrash3Fill onClick={()=>onHandleDelete(setFavoriteEpisodes,episode.id)} className="cursor-pointer text-2xl sm:text-3xl text-red-500 mr-0 sm:mr-3" />
      )}
    </div>
  );
}

export default Episode;
