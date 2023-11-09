import { useLoaderData } from "react-router-dom";
import MyPostedJobsCard from "./MyPostedJobsCard";


const MyPostedJobs = () => {


    const jobss = useLoaderData();

    return (
        <div className="mx-12">
            {/* <h2 className="text-5xl"> jobs: {jobss.length}</h2> */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 space-y-4 lg:grid-cols-3">
                {
                    jobss?.map(jobs => <MyPostedJobsCard
                        key={jobs._id} jobs={jobs}></MyPostedJobsCard>)
                }
            </div>


        </div>
    );
};

export default MyPostedJobs;