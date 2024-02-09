import { useCharacter } from "../context/CharacterProvider";
import useFetch from "../hook/useFetch";

function Episodes() {
  const { selectedCharacter } = useCharacter();

  const episodesId = selectedCharacter.episode.map((e) =>
    e.split("/").at(-1)
  );

  const { isLoading, data } = useFetch(
    `https://rickandmortyapi.com/api/episode/${episodesId}`,""
  );
  console.log(episodesId);
  console.log(data);
  if (isLoading) return <p> i loading epiode</p>;
  return (
    <div className="flex flex-col rounded-lg bg-slate-200 dark:bg-slate-800 m-2">
     {/* { data.map(episode=><Episode key={episode.id} />)} */}
     <Episode/>
    </div>
  );
}

export default Episodes;

function Episode() {
  return (
    <div className="bg-slate-300 dark:bg-slate-700 rounded-lg  p-2 m-2">
      <div className="flex mb-1">
        <button>➕</button>
        &nbsp;
        <div className="flex flex-col">
          <span>episode #8.1</span>
          <span className="font-thin text-sm">Sun , Sep 10,2017</span>
        </div>
      </div>
      <div className="font-bold text-md">
        S3&bull;E7 &bull; The Ricklantis Mixup
      </div>
    </div>
  );
}
