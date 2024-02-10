import Episodes from "../episodes/Episodes";
import SelectedCharacter from "./SelectedCharacter";

function CharacterDetail({width,breakpoint,setGotoHome}) {
  return (
    <div className="flex flex-col flex-1">
      <SelectedCharacter width={width} breakpoint={breakpoint} setGotoHome={setGotoHome} />
      <Episodes />
    </div>
  );
}

export default CharacterDetail;
