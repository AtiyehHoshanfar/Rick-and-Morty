function Episodes() {
  return <div className="flex flex-col rounded-lg bg-slate-200 m-2">
    <Episode/>
  </div>;
}

export default Episodes;




function Episode() {
  return (
  <div className="bg-slate-300 rounded-lg  p-2 m-2">
  <div className="flex mb-1">
    <button>➕</button>
    &nbsp;
    <div className="flex flex-col">
      <span>episode #8.1</span>
      <span className="font-thin text-sm">Sun , Sep 10,2017</span>
    </div>
  </div>
  <div className="font-bold text-md">
    S3&bull;E7 &bull; The Ricklantis Mixup
  </div>
</div>
  )
}
