import Episodes from "./Episodes";
import SelectedCharacter from "./SelectedCharacter";

function CharacterDetail() {
  return (
    <div className="flex flex-col flex-1">
      <SelectedCharacter />
      <Episodes />
    </div>
  );
}

export default CharacterDetail;
