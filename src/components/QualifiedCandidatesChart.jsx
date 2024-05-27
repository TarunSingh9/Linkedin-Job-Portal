import React from 'react';
import { Pie } from 'react-chartjs-2';

const QualifiedCandidatesChart = () => {

  const data1 = {
    labels: ['Full Stack Developer', 'Software Engineer', 'App Developer', 'Backend Developer', 'Graphic Designer', 'Marketing Manager'],
    datasets: [
      {
        data: [100, 150, 80, 120, 70, 90], // Sample data, you can replace it with your actual data
        backgroundColor: ['#5BBCFF', '#FFFAB7', '#FFD1E3', '#7EA1FF', '#FFA07A', '#90EE90'], // Colors for the slices
      },
    ],
  };

  const data2 = {
    labels: ['Full Stack Developer', 'Software Engineer', 'App Developer', 'Backend Developer', 'Graphic Designer', 'Marketing Manager'],
    datasets: [
      {
        data: [100, 150, 80, 120, 70, 90], // Sample data, you can replace it with your actual data
        backgroundColor: ['#5BBCFF', '#FFFAB7', '#FFD1E3', '#7EA1FF', '#FFA07A', '#90EE90'], // Colors for the slices
      },
    ],
  };

  const data3 = {
    labels: ['Full Stack Developer', 'Artificial Intelligence', 'ML Engineer', 'Software Engineer', 'App Developer', 'Backend Developer', 'Graphic Designer', 'Marketing Manager'],
    datasets: [
      {
        data: [150, 100, 70, 10, 50, 60, 29, 59, 54], // Sample data, you can replace it with your actual data
        backgroundColor: ['#5BBCFF', '#FFFAB7', '#FFD1E3', '#7EA1FF', '#FFA07A', '#90EE90', '#FF6347', '#4682B4'], // Colors for the slices
      },
    ],
  };






  return (
    <div className='container mx-auto px-8 py-8'>
      <h2 className="text-xl font-bold mb-4 px-6">Number of Qualified Candidates needed in different IT fields</h2>
      <div className="flex px-2 w-full">
        <div className="w-1/2">
          <h3 className="text-lg font-bold mb-2">2021</h3>
          <div className="h-96">
            <Pie data={data1} />
          </div>
        </div>

        <div className="w-1/2">
          <h3 className="text-lg font-bold mb-2">2022</h3>
          <div className="h-96">
            <Pie data={data2} />
          </div>
        </div>

        <div className="w-1/2">
          <h3 className="text-lg font-bold mb-2">2023</h3>
          <div className="h-96">
            <Pie data={data3} />
          </div>
        </div>
      </div>


    </div>
  );
};

export default QualifiedCandidatesChart;
