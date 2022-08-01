import Logo from "./Logo";

function Header() {
  return (
    <>
      <Logo />
      <div
        className="mb-4 h-36 flex justify-center items-center bg-hero-pattern rounded rounded-md"
        id="bg"
      >
        <div className="w-11/12 md:w-2/3 flex justify-center content-center rounded">
          <div className="w-full text-sm bg-white flex justify-between rounded">
            <div className="flex ml-2">
              <span className="material-icons text-xl mr-2 py-2 text-gray-400">
                work_outline
              </span>
              <input
                type="text"
                className="w-44 md:w-96 outline-none"
                placeholder="Title, companies, expertise or benefits"
              />
            </div>
            <button className="ml-4 w-24 bg-blue-500 text-white m-1 p-2 rounded">
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
