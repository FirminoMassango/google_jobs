function Job(props: any) {
  return (
    <div className="flex mx-2 bg-white rounded">
      {/* <img src={props.thumbnail} className="bg-green-700 m-2 rounded " /> */}
      <div className="details m-2 text-indigo-900 w-full">
        <div className="flex items-center">
          <img src={props.thumbnail} className="bg-green-700 m-2 rounded " />
          <span className="font-bold text-sm ml-2">{props.company_name}</span>
        </div>

        <p className="font-base text-lg py-2">{props.title}</p>
        <div className="md:flex md:justify-between">
          <div className="mb-4 md:mb-0">
            {props.isFulltime == 2 && (
              <span className="border-solid border border-indigo-900 px-1 font-bold text-sm rounded">
                Full Time
              </span>
            )}
          </div>
          <div className="flex text-gray-400">
            <div className="mr-4 flex">
              <span className="material-icons text-sm mr-2">public</span>
              <span className="text-sm">{props.location}</span>
            </div>
            <div className="mr-4 flex justify-center">
              <span className="material-icons text-sm mr-2">schedule</span>
              <span className="text-sm">{props.posted_at}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Job;
