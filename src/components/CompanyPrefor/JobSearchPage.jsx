import React from 'react';

const JobSearchPage = () => {
  // Dummy data for job demand
  const jobDemandData = [
    { type: 'Work from office', demand: 80 },
    { type: 'Remote', demand: 60 },
    { type: 'Hybrid', demand: 70 },
  ];

  return (
    <div className="flex justify-center items-center container mx-auto p-12">
      <div className="w-1/2  h-1/6 p-8">
        <img src="https://img.freepik.com/premium-photo/business-team-vector-flat_1031776-23589.jpg" alt="Job Search" className="w-full" />
      </div>
      <div className="w-1/2 p-8">
        <h2 className="text-2xl font-semibold mb-4">Job Demand by Work Type</h2>
        <div>
          {jobDemandData.map((job, index) => (
            <div key={index} className="mb-4">
              <div className="flex items-center mb-2">
                <div className="w-20">{job.type}</div>
                <div className="flex-1 bg-gray-200 h-8 rounded-full">
                  <div
                    className={`h-8 bg-blue-500 rounded-full`}
                    style={{ width: `${job.demand}%` }}
                  ></div>
                </div>
                <div className="ml-2">{job.demand}%</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobSearchPage;
