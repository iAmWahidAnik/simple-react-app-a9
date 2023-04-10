import React from 'react';
import { getDataFromDb } from '../../Utilities/Utils';
import { useLoaderData } from 'react-router-dom';
import AppliedCard from './AppliedCard';

const AppliedJobs = () => {
    const allData = useLoaderData();
    const appliedDataDb = getDataFromDb();

    // console.log(allData)

    let showAppliedData = [];
    for(const appliedId of appliedDataDb){
        const appliedData = allData.filter(data => data.jobId === appliedId)
        // console.log(...appliedData)
        showAppliedData.push(...appliedData);
    }
    // console.log(showAppliedData);

    return (
        <div>
            <h1>This is applied jobs page!!!</h1>
            <div className='flex flex-col w-4/6 mx-auto gap-7'>
                {
                    showAppliedData.map(data => <AppliedCard key={data.jobId} data={data}></AppliedCard>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;