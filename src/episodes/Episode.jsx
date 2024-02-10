import { useEpisode } from "../context/EpisodeProvider";
function Episode({ episode, children }) {
  const { favoriteEpisodes, setFavoriteEpisodes } = useEpisode();

  const handleAddToFavoriteEpisodes = (episode) => {
    setFavoriteEpisodes((prevEpisodes) => [...prevEpisodes, episode]);
  };
  const episodeNum = episode.episode.slice(1).split("E");
  return (
    <div className="bg-slate-300 dark:bg-slate-700 rounded-lg  p-2 m-2">
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
  );
}

export default Episode;
