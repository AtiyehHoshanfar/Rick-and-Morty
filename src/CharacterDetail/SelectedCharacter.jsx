import { useCharacter } from "../context/characterProvider";

function SelectedCharacter() {
  const { selectedCharacterId,favoriteCharacters,setFavoriteCharacters} = useCharacter();
  
  console.log(favoriteCharacters);
  const handleAddToFavoriteCharacter = (character) => {
    let newFavoriteCharacter = {
      id:character.id,
      name: character.name,
      gender: character.gender,
      status: character.status,
      species: character.species,
      image:character.image
    };
    setFavoriteCharacters((prevCharacters) => [
      ...prevCharacters,
      newFavoriteCharacter,
    ]);
    
  };
  return (
    <div className="p-[6px] relative rounded-xl m-2 dark:bg-slate-700 bg-slate-300 flex flex-col sm:flex-row">
      <img
        className="rounded-lg sm:w-48"
        src={selectedCharacterId.image}
        alt=""
      />
      <button 
        onClick={() => handleAddToFavoriteCharacter(selectedCharacterId)}
        disabled={favoriteCharacters.find(favoriteCharacter=>favoriteCharacter.id===selectedCharacterId.id)}
        className="absolute p-3 w-auto h-8 dark:bg-slate-950 bg-white rounded-full right-3 top-3 flex items-center justify-center"
      >
       {favoriteCharacters.find(favoriteCharacter=>favoriteCharacter.id===selectedCharacterId.id)?"is added before":"❤️"}
      </button>
      <div className="p-2 sm:flex sm:flex-col sm:py-3 sm:justify-between">
        <h2 className="font-bold text-2xl sm:text-xl">
          {selectedCharacterId.gender === "Male" ? "👨🏼" : "👩🏼"}{" "}
          {selectedCharacterId.name}
        </h2>
        <div className="flex items-center mb-4">
          <div
            className={`w-3 h-3 rounded-full  ${
              selectedCharacterId.status === "Dead"
                ? "bg-red-500"
                : "bg-green-500"
            } sm:w-4 sm:h-4`}
          ></div>
          <div className="font-medium text-sm text-slate-500 sm:text-lg">
            &nbsp; Alive - Human
          </div>
        </div>
        <div className="font-medium text-sm text-slate-500 sm:text-lg">
          Last Known Location :
        </div>
        <div className="font-medium text-m dark:text-slate-100 text-slate-900 mb-4 sm:text-lg">
          {selectedCharacterId.location.name}
        </div>

        <div className="font-medium text-sm text-slate-500 sm:text-lg">
          First seen in :
        </div>
        <div className="font-medium text-m dark:text-slate-100 text-slate-900 sm:text-lg">
          {selectedCharacterId.origin.name}
        </div>
      </div>
    </div>
  );
}

export default SelectedCharacter;
