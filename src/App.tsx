import { useEffect, useState } from "react";
import Job from "./components/Job";
import Filter from "./components/Filter";
import { JobsResult } from "./helper/JobType";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const URL =
    "https://cors-anywhere.herokuapp.com/https://serpapi.com/search?engine=google_jobs&q=maputo&api_key=19fc4b31cd636acf6de3a8b8987c3310d5d67527ed7208c75f7aca39a81c5563";

  const [jobs, setJobs] = useState<JobsResult[]>([]);

  async function getJobs() {
    const response = await fetch(URL);
    const jobs = await response.json();
    console.log(jobs.jobs_results);
    setJobs(jobs.jobs_results);
  }

  useEffect(() => {
    getJobs();
  }, []);

  return (
    <div className="h-full px-4 md:px-24 bg-slate-100">
      <header className="text-2xl text-slate-900">
        <Header />
      </header>
      <main>
        <div className="md:flex">
          <div className="w-full md:w-2/5">
            <Filter />
          </div>
          <div className="w-full md:w-3/5">
            {jobs.map((job) => {
              return (
                <div key={job.job_id} className="mb-4">
                  <Job
                    company_name={job.company_name}
                    title={job.title}
                    thumbnail={job.thumbnail}
                    location={job.location}
                    isFulltime={job.extensions.length}
                    posted_at={job.extensions[0]}
                    description="descricao"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
