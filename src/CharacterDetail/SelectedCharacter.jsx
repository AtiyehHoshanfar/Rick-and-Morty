function SelectedCharacter() {
  return (
    <div className="p-[6px] relative rounded-xl m-2 bg-slate-300 flex flex-col sm:flex-row">
      <img
        className="rounded-lg sm:w-48"
        src="./public/e9450be82bfbd02243a73d96511d8670.jpg"
        alt=""
      />
      <div className="absolute w-8 h-8 bg-white rounded-full right-3 top-3 flex items-center justify-center">
        ❤️
      </div>
      <div className="p-2 sm:flex sm:flex-col sm:py-3 sm:justify-between">
        <h2 className="font-bold text-2xl sm:text-xl">👨🏼 Rick Sanchez</h2>
        <div className="flex items-center mb-4">
          <div className="w-3 h-3 rounded-full bg-green-500 sm:w-4 sm:h-4"></div>
          <div className="font-medium text-sm text-slate-500 sm:text-lg">
            &nbsp; Alive - Human
          </div>
        </div>
        <div className="font-medium text-sm text-slate-500 sm:text-lg">
          Last Known Location :
        </div>
        <div className="font-medium text-m text-slate-900 mb-4 sm:text-lg">
          Earth (C-137)
        </div>

        <div className="font-medium text-sm text-slate-500 sm:text-lg">
          First seen in :
        </div>
        <div className="font-medium text-m text-slate-900 sm:text-lg">
          Anatomy Park
        </div>
      </div>
    </div>
  );
}

export default SelectedCharacter;
