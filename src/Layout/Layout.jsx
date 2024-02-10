import { useEffect, useState } from "react";
import CharacterDetail from "../CharacterDetail/CharacterDetail";
import CharacterList from "../CharacterList/CharacterList";
import { useCharacter } from "../context/CharacterProvider";

function Layout({ setGotoHome, gotoHome }) {
  const { selectedCharacter } = useCharacter();
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 780;
  useEffect(() => {
    function handleWindowResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  return (
    <div className="flex justify-between max-w-screen-xl  m-auto ">
      {selectedCharacter && width < breakpoint ? (
        ""
      ) : (
        <CharacterList setGotoHome={setGotoHome} />
      )}
      {gotoHome && width < breakpoint && (
        <CharacterList setGotoHome={setGotoHome} />
      )}
      {gotoHome || (selectedCharacter && <CharacterDetail width={width} breakpoint={breakpoint} setGotoHome={setGotoHome} />)}
    </div>
  );
}

export default Layout;
