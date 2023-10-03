import React, { useEffect, useState } from "react";
import JobInfo from "./jobInfo";
import BtnContainer from "./btnContainer";

const url = "https://course-api.com/react-tabs-project";
const TabStarter = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [currentItem,setCurrentItem]=useState(0)

  const fetchJobs = async () => {
    const res = await fetch(url);
    const newJobs = await res.json();
    setJobs(newJobs);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (isLoading) {
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    );
  }

  return (
    <section className="jobs-center">
      {/* button container */}
      <BtnContainer jobs={jobs} currentItem={currentItem} setCurrentItem={setCurrentItem}/>
      {/* job info */}
      <JobInfo jobs={jobs} currentItem={currentItem}/>
    </section>
  );
};

export default TabStarter;
