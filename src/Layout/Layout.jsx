import CharacterDetail from "../CharacterDetail/CharacterDetail";
import CharacterList from "../CharacterList/CharacterList";
import { useCharacter } from "../context/characterProvider";

function Layout() {
    const{selectedCharacterId}=useCharacter()
  return <div 
  className="flex justify-between container  m-auto ">
    <CharacterList/>
    {selectedCharacterId&&<CharacterDetail/>}
  </div>;
}

export default Layout;
