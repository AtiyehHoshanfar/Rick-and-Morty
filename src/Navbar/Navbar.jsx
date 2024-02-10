import { Badge } from "@mui/material";
import {  useRef, useState } from "react";
import { HiOutlineHeart } from "react-icons/hi";
import { HiBars3 } from "react-icons/hi2";
import Modal from "../Modal/Modal";
import { useCharacter } from "../context/CharacterProvider";
import useDarkMode from "../hook/useDarkMode";
import useOutSideClick from "../hook/useOutSideClick";
import { useEpisode } from "../context/EpisodeProvider";
import { useSearch } from "../context/SearchProvider";

function Navbar() {
  const menuRef = useRef();
  const [openHamburgerMenu, setOpenHamburgerMenu] = useState(false);
  useOutSideClick(menuRef, "exceptionId", () => setOpenHamburgerMenu(false));
  const [openFavorites, setOpenFavorites] = useState(false);
  const [openFavoritesMobile, setOpenFavoritesMobile] = useState(false);
  const { favoriteCharacters } = useCharacter();
  const { favoriteEpisodes } = useEpisode();
  const [colorTheme, setTheme] = useDarkMode();
  const [darkSide, setDarkSide] = useState(colorTheme === "dark");
  const handleToggleDarkmode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked.target.checked);
  };
const { searchValue, setSearchValue }=useSearch()
  return (
    <div>
      <div className="mx-auto container">
        <nav className="p-2 border-2 m-2 rounded-lg border-slate-200 dark:border-slate-800">
          <ul className="flex items-center justify-between sm:justify-around">
            <li>
              <img
                src="/public/image/b6740400-92d4-11ea-8a13-d5f6e0558e9b_prev_ui (1).png"
                className="w-12 h-12"
                alt="rick and morty logo"
              />
            </li>
            <li className="hidden sm:block">
              <input
              onChange={(e)=>setSearchValue(e.target.value)}
              value={searchValue}
                type="search"
                placeholder="search something ..."
                className="p-[6px] outline-none border-none rounded-md bg-slate-200 dark:bg-slate-800 placeholder:text-sm"
              />
            </li>
            <li className="hidden sm:block font-bold text-lg">found x items</li>
            <li
              className="hidden sm:block"
              onClick={() => setOpenFavorites((open) => !open)}
            >
              <Badge badgeContent={favoriteCharacters.length+favoriteEpisodes.length} color="primary">
                <HiOutlineHeart
                  color="action"
                  className="text-2xl text-red-500"
                />
              </Badge>
            </li>
            <li className="hidden sm:block">
              <input
                type="checkbox"
                checked={darkSide}
                onChange={handleToggleDarkmode}
                id="toggle"
                className="checkbox"
              />
              <label htmlFor="toggle" className="switch"></label>
            </li>
            <li className="sm:hidden">
              <button
                onClick={() => setOpenHamburgerMenu((open) => !open)}
                className="text-2xl"
              >
                <HiBars3 />
              </button>
            </li>
          </ul>
          {openHamburgerMenu && (
            <div
              className="sm:hidden flex justify-center"
              ref={menuRef}
              id="exceptionId"
            >
              <div className="bg-slate-200 dark:bg-slate-800 absolute w-[90%] p-2 rounded-lg m-auto z-[2]">
                <ul>
                  <li className="p-2">
                    <input
                      type="search"
                      placeholder="search something ..."
                      className="w-[100%] p-2 bg-white dark:bg-slate-950 outline-none border-none rounded-lg"
                    />
                  </li>
                  <li className="rounded-md p-2 hover:transition-all hover:font-bold hover:bg-slate-500">
                    Home
                  </li>
                  <li className="rounded-md p-2 hover:transition-all hover:font-bold hover:bg-slate-500"
                  onClick={() => setOpenFavoritesMobile((open) => !open)}>
                    Favorite
                  </li>
                  <li className=" flex items-center justify-between rounded-md  hover:transition-all hover:font-bold hover:bg-slate-500">
                    <label
                      htmlFor="toggle"
                      className="block w-full h-full p-2"
                    >
                      Theme
                      <input
                        type="checkbox"
                        checked={darkSide}
                        onChange={handleToggleDarkmode}
                        id="toggle"
                        className="hidden"
                      />
                    </label>

                  </li>
                </ul>
              </div>
            </div>
          )}
        </nav>
      </div>
      {openFavorites && <Modal  handleOpen={setOpenFavorites } />}
      {openFavoritesMobile&&<Modal  handleOpen={setOpenFavoritesMobile } />}
    </div>
  );
}

export default Navbar;
