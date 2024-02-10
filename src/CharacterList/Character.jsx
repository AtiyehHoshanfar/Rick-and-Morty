import { useCharacter } from "../context/CharacterProvider";

function Character({ character, setGotoHome }) {
  const { setSelectedCharacter } = useCharacter();
  const handleSelectedCharacter = () => {
    setGotoHome(false);
    setSelectedCharacter(character);
  };
  return (
    <div
      onClick={ handleSelectedCharacter}
      className="p-[6px] rounded-xl mb-2 bg-slate-300 dark:bg-slate-700 flex flex-col sm:flex-row focus:shadow-md transition-all  hover:bg-slate-500"
    >
      <img className="rounded-lg sm:w-24" src={character.image} alt="" />
      <div className="p-2 sm:flex sm:flex-col sm:py-3 sm:justify-between">
        <h2 className="font-bold text-lg mb-2 sm:text-xl">
          {character.gender === "Male" ? "👨🏼" : "👩🏼"}
          {character.name}
        </h2>
        <div className="flex items-center">
          <div
            className={`w-3 h-3 rounded-full sm:w-4 sm:h-4 ${
              character.status === "Dead" ? "bg-red-500" : "bg-green-500"
            }`}
          ></div>
          <div className="font-medium text-sm dark:text-slate-300 text-slate-700 sm:text-lg">
            &nbsp; {character.status} - {character.species}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Character;
