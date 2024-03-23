import { useEffect } from "react";
import { useState } from "react";
import Job from "../Job/Job";


const FetureJobs = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data));
    }, [])

    return (
        <div>
            <div className="text-center">
                <h2 className="text-6xl">Feture Jobs: {jobs.length}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptatem libero nesciunt ratione, magnam a architecto minima possimus hic nulla sapiente cupiditate saepe debitis, odit similique adipisci nostrum. Sunt, voluptate.</p>
            </div>
            <div>
                {
                    jobs.map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
        </div>
    );
};

export default FetureJobs;