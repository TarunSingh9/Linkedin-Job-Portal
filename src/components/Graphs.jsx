import React from 'react';
import { Bar, Pie, Line } from 'react-chartjs-2';


const dataBar = {
  labels: ['Job recommendations', 'Skill endorsements', 'Networking opportunities', 'Professional development resources'],
  datasets: [
    {
      label: 'Importance of Services',
      backgroundColor: ['#5BBCFF', '#FFFAB7', '#FFD1E3', '#7EA1FF'],
      borderColor: '#1E40AF',
      borderWidth: 1,
      hoverBackgroundColor: '#3182CE',
      hoverBorderColor: '#2C5282',
      data: [75, 60, 50, 80]
    }
  ]
};

const dataPie = {
  labels: ['Job search', 'Networking', 'Professional groups'],
  datasets: [
    {
      data: [40, 30, 30],
      backgroundColor: ['#5BBCFF', '#FFFAB7', '#FFD1E3'],
      hoverBackgroundColor: ['#3182CE', '#FCD34D', '#FF90B3']
    }
  ]
};

const dataLine = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Job Recommendations',
      fill: false,
      lineTension: 0.1,
      backgroundColor: '#7EA1FF',
      borderColor: '#1E40AF',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#1E40AF',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#1E40AF',
      pointHoverBorderColor: '#1E40AF',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [50, 30, 50, 45, 70, 75]
    }
  ]
};


const Graphs = () => {
  return (
    <div className="container mx-auto p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Bar Chart - Top Services Desired by Job Seekers</h2>
        <Bar data={dataBar} />
        <p className="text-sm text-gray-600 mt-2">This bar chart illustrates the top services desired by job seekers on LinkedIn.</p>
      </div>
      <div className="mb-8  w-80 h-96">
        <h2 className="text-xl font-bold mb-4">Pie Chart - Distribution of Job Seekers LinkedIn Usage by Service</h2>
        <Pie data={dataPie}  />
        <p className="text-sm text-gray-600 mt-2">This pie chart shows the distribution of job seekers LinkedIn usage by service.</p>
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Line Graph - Trend of Service Usage Over Time</h2>
        <Line data={dataLine} />
        <p className="text-sm text-gray-600 mt-2">This line graph displays the trend of service usage over time.</p>
      </div>
     
    </div>
  );
};

export default Graphs;
