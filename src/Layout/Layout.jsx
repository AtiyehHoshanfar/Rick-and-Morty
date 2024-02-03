// import CharacterDetail from "../CharacterDetail/CharacterDetail";
import CharacterList from "../CharacterList/CharacterList";

function Layout() {
  return <div 
  className="flex justify-between container  m-auto ">
    <CharacterList/>
    {/* <CharacterDetail/> */}
  </div>;
}

export default Layout;
