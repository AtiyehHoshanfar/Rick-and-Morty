import { useEffect, useState } from "react";
import CharacterDetail from "../CharacterDetail/CharacterDetail";
import CharacterList from "../CharacterList/CharacterList";
import { useCharacter } from "../context/characterProvider";

function Layout() {
  const { selectedCharacterId } = useCharacter();
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 640;
  useEffect(() => {
    function handleWindowResize () { setWidth(window.innerWidth)}
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  return (
    <div className="flex justify-between container  m-auto ">
    {selectedCharacterId&&width<breakpoint?"": <CharacterList /> }  
      {selectedCharacterId && <CharacterDetail />}
    </div>
  );
}

export default Layout;
