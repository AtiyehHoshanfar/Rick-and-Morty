import { useState } from "react";
import { useCharacter } from "../context/CharacterProvider";
import { useEpisode } from "../context/EpisodeProvider";
import Episode from "../episodes/Episode";

function Modal({ handleOpen }) {
  const { favoriteCharacters } = useCharacter();
  const { favoriteEpisodes } = useEpisode();
  const [favoriteItem, setFavoriteItem] = useState("character");
  return (
    <div className="flex justify-center">
      <div
        className="fixed top-0 z-[2] right-0 backdrop-blur-md w-full h-screen"
        onClick={() => handleOpen(false)}
      ></div>
      <div className="w-[90%] sm:w-[60%] z-10 bg-slate-300 rounded-lg m-auto p-2 sm:p-4 dark:bg-slate-700 ">
        <div className="relative  overflow-hidden flex m-2 items-center justify-around p-1 bg-slate-200 rounded-full dark:bg-slate-800">
          <button
            onClick={() => setFavoriteItem("character")}
            className="relative  flex-1 p-2 rounded-tl-lg rounded-tr-lg text-slate-800  dark:text-slate-200"
          >
            Characters
          </button>
          <button
            className="flex-1 p-2 rounded-lg text-slate-800 dark:text-slate-200"
            onClick={() => setFavoriteItem("episode")}
          >
            Episodes
          </button>
          <div
            className={`absolute z-10 rounded-full dark:bg-white bg-black opacity-20 w-[50%] h-full transition-all  top-0 left-0 ${
              favoriteItem === "character"
                ? "translate-x-0"
                : "translate-x-[100%]"
            }`}
          ></div>
        </div>
        <div className="grid grid-cols-1 gap-2 mx-2 ">
          {favoriteItem === "character" &&
            favoriteCharacters.map((favoriteCharacter) => (
              <ModalCharacter
                key={favoriteCharacter.id}
                favoriteCharacter={favoriteCharacter}
              />
            ))}
          {favoriteItem === "episode" &&
            favoriteEpisodes.map((favoriteEpisode) => (
              <Episode key={favoriteEpisode.id} episode={favoriteEpisode} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Modal;
function ModalCharacter({ favoriteCharacter }) {
  console.log(favoriteCharacter);
  return (
    <div className="p-[6px] rounded-xl bg-slate-400  dark:bg-slate-600 flex flex-row hover:shadow-md transition-all hover:bg-slate-500">
      <img className="rounded-lg w-24" src={favoriteCharacter.image} alt="" />
      <div className="p-2 flex flex-col py-3 justify-between">
        <h2 className="font-bold text-lg mb-2 sm:text-xl">
          {favoriteCharacter.gender === "Male" ? "👨🏼" : "👩🏼"}{" "}
          {favoriteCharacter.name}
        </h2>
        <div className="flex items-center">
          <div
            className={`w-3 h-3 rounded-full ${
              favoriteCharacter.status === "Dead"
                ? "bg-red-500"
                : "bg-green-500"
            } sm:w-4 sm:h-4`}
          ></div>
          <div className="font-medium text-sm text-slate-700 sm:text-lg dark:text-slate-300">
            &nbsp; {favoriteCharacter.gender} - {favoriteCharacter.species}
          </div>
        </div>
      </div>
    </div>
  );
}
