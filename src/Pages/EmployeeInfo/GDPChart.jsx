import React from 'react';
import { Radar, Line, Bar, Pie } from 'react-chartjs-2';

const GDPChart = () => {
  // Data for different charts
  const radarData = {
    labels: ['Programming and Coding', 'Networking', 'Cybersecurity', 'Cloud Computing', 'Database Management', 'Systems Administration', 'Marketing and Sales'], // Add the user's skills
    datasets: [{
      data: [6, 8,9, 5, 8, 6, 7], // Sample proficiency levels for each skill
      backgroundColor: 'rgba(91,188,255,0.5)', // Blue
      borderColor: '#5BBCFF', // Blue
      pointBackgroundColor: '#5BBCFF', // Blue
    }]
  };
  

  const lineData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Connections',
        data: [10, 20, 15, 25], // Sample data
        borderColor: '#5BBCFF', // Blue
        backgroundColor: 'rgba(91,188,255,0.2)', // Blue
      },
      // Add datasets for other activities
    ]
  };

  const barData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'New Connections',
        data: [5, 8, 7, 10], // Sample data
        backgroundColor: '#5BBCFF', // Blue
      },
      {
        label: 'Lost Connections',
        data: [1, 2, 0, 1], // Sample data
        backgroundColor: '#FFFAB7', // Yellow
      }
    ]
  };

  const pieData = {
    labels: ['Applied', 'Interviewed', 'Offer Received', 'Rejected', 'Pending', 'Hired', 'Withdrawn', 'Cancelled'], // Updated labels
    datasets: [{
      data: [25, 15, 5, 55, 10, 30, 8, 7], // Updated data points
      backgroundColor: ['#5BBCFF', '#FFFAB7', '#FFD1E3', '#7EA1FF', '#FFB677', '#C4FFBE', '#FF8F8F', '#A1D9FF'], // Updated colors
    }]
  };
  

  const lineMetricsData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Profile Views',
        data: [100, 150, 120, 180], // Sample data
        borderColor: '#5BBCFF', // Blue
        backgroundColor: 'rgba(91,188,255,0.2)', // Blue
      },
      // Add datasets for other metrics
    ]
  };

  

  const barCompetitorData = {
    labels: ['Market Research', 'Data Analysis', 'SWOT Analysis', 'Industry Knowledge',  'Critical Thinking', 'Communication Skills', 'Presentation Skills'], // Updated labels
    datasets: [
      {
        label: 'You',
        data: [3, 4, 2, 5, 3, 6, 7, ], // Sample data for your skills
        backgroundColor: '#5BBCFF', // Blue
      },
      {
        label: 'Competitor',
        data: [4, 3, 4, 3, 4, 5, 6], // Sample data for competitor's skills
        backgroundColor: '#FFFAB7', // Yellow
      }
    ]
  };
  
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2 gap-4">
        <div>
        <div className="p-6 w-2/3 ">
          <h2 className="text-xl font-semibold mb-4">Skills Assessment Radar Chart</h2>
          <Radar data={radarData} />
        </div>
        <div className="p-6 w-2/3 ">
          <h2 className="text-xl font-semibold mb-4">Activity Tracker Line Graph</h2>
          <Line data={lineData} />
        </div>
        </div>

        <div>
        <div className=" p-6 w-2/3">
          <h2 className="text-xl font-semibold mb-4">Network Growth Bar Chart</h2>
          <Bar data={barData} />
        </div>
        <div className=" p-6  w-2/3">
          <h2 className="text-xl font-semibold mb-4">Job Application Status Pie Chart</h2>
          <Pie data={pieData} />
        </div>
        </div>


        <div className=" p-6  w-2/3">
          <h2 className="text-xl font-semibold mb-4">Competitor Analysis Bar Graph</h2>
          <Bar data={barCompetitorData} />
        </div>
        
        <div className=" p-6  w-2/3">
          <h2 className="text-xl font-semibold mb-4">Engagement Metrics Line Chart</h2>
          <Line data={lineMetricsData} />
        </div>
       
       

      </div>
    </div>
  );
};

export default GDPChart;
