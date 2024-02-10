import { useCharacter } from "../context/CharacterProvider";
import useFetch from "../hook/useFetch";
import Episode from "./Episode";
import { CgAddR } from "react-icons/cg";

function Episodes() {
  const { selectedCharacter } = useCharacter();

  const episodesId = selectedCharacter.episode.map((e) =>
    Number(e.split("/").at(-1))
  );


  const { isLoading, data } = useFetch(
    `https://rickandmortyapi.com/api/episode/${episodesId}`
  );

  if (isLoading) return <p> is loading episode</p>;
  return (
    <div>
      <div className="flex flex-col rounded-lg bg-slate-200 dark:bg-slate-800 m-2">
        {[data].flat().map((episode) => (
          <Episode key={episode.id} episode={episode} >
             <CgAddR />
          </Episode>
        ))}
      </div>
    </div>
  );
}

export default Episodes;


