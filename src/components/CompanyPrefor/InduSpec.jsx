import React from 'react';
import { Line, Bar, Scatter, Pie } from 'react-chartjs-2';

const InduSpec = () => {
  // Define data for charts
  const lineChartData = {
    labels: ['Tcs', 'Infosys', 'Wipro', 'Accenture', 'HCL Technologies', 'Tech Mahindra', 'IBM India', 'Capgemini', 'Deloitte India', 'Amazon India'],
    datasets: [
      {
        label: 'sales data ',
        data: [85, 72, 78, 90, 68, 75, 81, 79, 87, 73], // Example progress percentages for each company
        borderColor: '#9195F6',
        fill: false,
      },
    ],
  };

  const barChartData = {
    labels: ['TCS', 'Infosys', 'Wipro', 'Accenture', 'HCL Technologies', 'Tech Mahindra', 'IBM India', 'Capgemini', 'Deloitte India', 'Amazon India'],
    datasets: [
      {
        label: 'Number of Employees',
        data: [50000, 45000, 40000, 55000, 48000, 42000, 38000, 47000, 39000, 60000],
        backgroundColor: ['#9195F6', '#B7C9F2', '#F9F07A', '#FB88B4', '#FF6384', '#3DDC84', '#FFD700', '#CD5C5C', '#4682B4', '#87CEEB'],
      },
    ],
  };


  const pieChartData = {
    labels: ['Tata Consultancy Services (TCS)', 'Infosys', 'Wipro', 'Accenture', 'HCL Technologies', 'Tech Mahindra', 'IBM India', 'Capgemini', 'Deloitte India', 'Amazon India'],
    datasets: [
      {
        data: [300, 50, 100, 40, 120, 80, 70, 90, 60, 150],
        backgroundColor: ['#9195F6', '#B7C9F2', '#F9F07A', '#FB88B4', '#FF6384', '#3DDC84', '#FFD700', '#CD5C5C', '#4682B4', '#87CEEB'],
      },
    ],
  };

  return (
    <div className="flex flex-wrap justify-center  p-12">
      <div className="w-full">
        <h2 className="text-2xl font-bold px-20 py-7">Industry-Specific Companies</h2>
      </div>
      <div className="text-lg text-gray-700 px-20">
        <p>Industry-Specific Companies are enterprises specializing in particular sectors, offering tailored products or services to meet industry-specific demands. They leverage focused expertise and resources to address unique challenges and deliver specialized solutions within their targeted sectors.</p>
      </div>

      <div className="w-full md:w-1/2 lg:w-1/3 p-4">
        <h2 className="text-lg font-semibold mb-2">Line Chart</h2>
        <Line data={lineChartData} />
        <p className="mt-2 text-sm font-semibold">Line chart visualizing sales data over months.</p>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 p-4">
        <h2 className="text-lg font-semibold mb-2">Bar Chart</h2>
        <Bar data={barChartData} />
        <p className="mt-2 text-sm font-semibold">Bar chart showing the number of employees .</p>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/5 p-4">
        <h2 className="text-lg font-semibold mb-2">Pie Chart</h2>
        <Pie data={pieChartData}  />
        <p className="mt-2 text-sm font-semibold">Pie chart showing distribution of colors.</p>
      </div>
    </div>
  );
  

};

export default InduSpec;

