
import useFetch from "../hook/useFetch";
import Character from "./Character";

function CharacterList() {
  const { isLoading, data } = useFetch(
    "https://rickandmortyapi.com/api/character",
    ""
  );

  if (isLoading) return <p> is loading data ...</p>;

  return (
    <div className="grid grid-cols-2 m-2 gap-2 sm:grid-cols-1">
      {data.map((character) => (
        <Character character={character} key={character.id} />
      ))}
    </div>
  );
}

export default CharacterList;
