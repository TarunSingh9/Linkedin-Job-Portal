import React from 'react';

const IntroPerform = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-center items-center">
        {/* Company Performance Data */}
        <div className="w-full md:w-3/5">
          <h1 className="text-3xl font-bold mb-4">Understanding Company Growth for Job Search</h1>
          <p className="text-lg text-gray-700 mb-6">
            Company growth is a crucial factor for job seekers when evaluating potential employers. It impacts career advancement opportunities, job stability, innovation, and organizational culture. Let explore how different aspects of company growth influence the job search process.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Top 5 categories of companies for job searching on LinkedIn, arranged in a sequence:
          </p>
          <ul className=" px-5">
            <li>Industry-Specific Companies</li>
            <li>Startup Companies</li>
            <li>Fortune 500 Companies</li>
            <li>Remote-Friendly Companies</li>
            <li>Nonprofit Organizations</li>
          </ul>
        </div>
        {/* Growth Image */}
        <div className="w-full md:w-2/5 mt-8 md:mt-0">
          <img src="https://img.freepik.com/free-vector/tiny-business-people-with-growing-graph-progress-report-company-teamwork-performance-boost-market-promotion-plan-flat-vector-illustration-success-leadership-office-achievement-concept_74855-20959.jpg" alt="Company Growth" className="" />
        </div>
      </div>
    </div>
  );
};

export default IntroPerform;