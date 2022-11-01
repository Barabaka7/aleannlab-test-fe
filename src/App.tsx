import { useEffect, useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { JobBoard } from "./containers/JobBoard";
import { JobDetailed } from "./components/job-detailed/JobDetailed";
import { fetchAllJobs } from "./helpers/fetchingData";
import { Job } from "./helpers/model";

function App() {
  const [allJobs, setAllJobs] = useState<Job[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const setJobs = async () => {
    const allFetchedJobsObj = await fetchAllJobs();
    setAllJobs(allFetchedJobsObj);
  };

  useEffect(() => {
    setJobs();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={`/1`} replace />} />
        <Route path="/:currentPage" element={<JobBoard allJobs={allJobs} />} />
        <Route path="/job/:id" element={<JobDetailed />} />
      </Routes>
    </Router>
  );
}

export default App;

// TODO: different Images

// TODO: save bookmark icon!
