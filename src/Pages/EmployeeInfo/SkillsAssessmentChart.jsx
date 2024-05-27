import React from 'react';
import { Bar } from 'react-chartjs-2';

const SkillsAssessmentChart = () => {
  // Data for the Skills Assessment Bar Chart
  const data = {
    labels: [
      'Programming and Coding',
      'Networking',
      'Cybersecurity',
      'Cloud Computing',
      'Database Management',
      'Systems Administration',
      'Marketing and Sales'
    ],
    datasets: [
      {
        label: 'Proficiency Level',
        data: [4, 3, 2, 5, 3, 4, 2], // Proficiency levels (1 to 5) for each skill
        backgroundColor: ['#008DDA', '#FFBE98', '#FFE3CA', '#008DDA', '#FFBE98', '#FFE3CA', '#008DDA'], // Tailwind CSS colors
        borderWidth: 1,
      },
    ],
  };

  // Options for the Skills Assessment Bar Chart
  const options = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
          callback: function(value) {
            return value;
          },
        },
        title: {
          display: true,
          text: 'Proficiency Level',
        },
      },
    },
  };

  return (
    <div className="flex justify-between items-center">
      <div className="w-full max-w-lg mr-4">
        <Bar data={data} options={options} />
      </div>
      <div className="w-full p-3">
        <p className='text-lg text-gray-700 mb-6'>
          Using LinkedIn effectively as a job seeker can significantly enhance productivity and boost chances of finding relevant opportunities. To succeed, optimize your profile with a professional photo and comprehensive details, expand your network by connecting with industry professionals and participating in discussions. Engage with content, utilize LinkedIn Learning for skill development, and seek recommendations for credibility. Leverage job search tools, build a strong personal brand, and attend events to network and learn. Research companies, stay organized, and use LinkedIn features to track job search activities efficiently.
        </p>
      </div>
    </div>
  );
};

export default SkillsAssessmentChart;

