function LeftPanel() {
  return (
    <div className="text-indigo-900 font-medium mb-7 mr-5">
      <div className="my-7">
        <span>
          <input
            type="checkbox"
            className="w-5 h-5 ml-4 border h-5 w-5 border border-gray-300 rounded-sm bg-white"
            name="full_time"
          />
        </span>
        <span className="ml-2">Full Time</span>
      </div>
      <p className="font-bold mb-2 text-gray-500">LOCATION</p>
      <div className="mb-4 p-2 text-sm flex justify-center bg-white rounded">
        <span className="material-icons text-xl mr-2 text-gray-400">
          public
        </span>
        <input
          type="text"
          className="w-96 outline-none"
          placeholder="City, state, zip code or country"
        />
      </div>
      <div className="ml-4 mb-2">
        <input type="radio" className="w-5 h-5" id="" />
        <label className="ml-2">London</label>
      </div>
      <div className="ml-4 mb-2">
        <input type="radio" className="w-5 h-5" id="" />
        <label className="ml-2 mb-2">Amsterdam</label>
      </div>
      <div className="ml-4 mb-2">
        <input type="radio" className="w-5 h-5" id="" />
        <label className="ml-2">New York</label>
      </div>
      <div className="ml-4">
        <input type="radio" className="w-5 h-5" id="" />
        <label className="ml-2">Berlin</label>
      </div>
    </div>
  );
}

export default LeftPanel;
