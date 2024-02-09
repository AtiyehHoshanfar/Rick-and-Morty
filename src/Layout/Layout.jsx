import { useEffect, useState } from "react";
import CharacterDetail from "../CharacterDetail/CharacterDetail";
import CharacterList from "../CharacterList/CharacterList";
import { useCharacter } from "../context/CharacterProvider";

function Layout() {
  const { selectedCharacter } = useCharacter();
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 640;
  useEffect(() => {
    function handleWindowResize () { setWidth(window.innerWidth)}
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  return (
    <div className="flex justify-between container  m-auto ">
    {selectedCharacter&&width<breakpoint?"": <CharacterList /> }  
      {selectedCharacter && <CharacterDetail />}
    </div>
  );
}

export default Layout;
