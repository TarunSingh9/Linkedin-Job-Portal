import React from 'react';
import { Pie } from 'react-chartjs-2';

const EngagementDashboard = () => {
  // Dummy data for illustration
  const data = {
    labels: ['Profile Views', 'Post Impressions', 'Engagement Rate'],
    datasets: [{
      data: [300, 500, 200],
      backgroundColor: ['#F59E0B', '#10B981', '#3B82F6'],
      hoverOffset: 4
    }]
  };

  return (
    <div className="container mx-auto">
       <h1 className='text-xl font-semibold mb-4' >Engagement Metrics Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-2/3 h-1/3"> 
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Metrics Overview</h2>
          <Pie data={data} />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Key Metrics</h2>
          <ul>
            <li className="flex items-center mb-2">
              <span className="w-4 h-4 bg-yellow-500 mr-2 rounded-full"></span>
              Profile Views: 300
            </li>
            <li className="flex items-center mb-2">
              <span className="w-4 h-4 bg-green-500 mr-2 rounded-full"></span>
              Post Impressions: 500
            </li>
            <li className="flex items-center mb-2">
              <span className="w-4 h-4 bg-blue-500 mr-2 rounded-full"></span>
              Engagement Rate: 200
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EngagementDashboard;
