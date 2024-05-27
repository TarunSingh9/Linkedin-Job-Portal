import React from 'react';
import { Bar } from 'react-chartjs-2';

const ServiceOfferBarChart = () => {
  // Data for the bar chart
  const data = {
    labels: ['Profile Optimization', 'Job Search', 'Networking', 'Company Research', 'LinkedIn Learning', 'Premium Memberships', 'Resume Builder', 'Recommendations & Endorsements', 'Job Application Tracking', 'Career Advice & Mentorship'],
    datasets: [
      {
        label: 'Frequency or Importance',
        backgroundColor: ['#5BBCFF', '#FFFAB7', '#FFD1E3', '#7EA1FF'],
        borderColor: ['#5BBCFF', '#FFFAB7', '#FFD1E3', '#7EA1FF'],
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(54, 162, 235, 0.75)',
        hoverBorderColor: 'rgba(54, 162, 235, 1)',
        data: [5, 4, 5, 3, 3, 2, 3, 4, 3, 4] // Example values representing frequency or importance
      }
    ]
  };

  // Options for the bar chart
  const options = {
    maintainAspectRatio: false,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };

  return (
    <div style={{ width: '600px', height: '400px' }}>
      <h2 className="text-3xl font-bold mb-4 px-6">LinkedIn Services and Importance</h2>
      <Bar
        data={data}
        options={options}
      />
    </div>
  );
};

export default ServiceOfferBarChart;

