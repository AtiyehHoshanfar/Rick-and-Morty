import { useSearch } from "../context/SearchProvider";
import useFetch from "../hook/useFetch";
import Character from "./Character";

function CharacterList({ setGotoHome }) {
  const { searchValue } = useSearch();
  const { isLoading, data } = useFetch(
    "https://rickandmortyapi.com/api/character",
    searchValue
  );

  if (isLoading) return <p> is loading data ...</p>;

  return (
    <div>
      <div className="grid grid-cols-2 m-2 gap-2 sm:grid-cols-1">
        {data.results?.map((character) => (
          <Character character={character} key={character.id} setGotoHome={setGotoHome}/>
        ))}
      </div>
    </div>
  );
}

export default CharacterList;
