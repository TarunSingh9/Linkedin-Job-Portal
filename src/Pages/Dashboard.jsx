import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="grid grid-cols-2 gap-7 p-40">
      <div className="col-span-2 text-center mb-8">
        <h1 className="text-5xl font-bold">Searching  the company for deep  analyze</h1>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg shadow-md flex flex-col justify-center items-center hover:shadow-lg hover:border-blue-800 transition duration-300">
        <img src='https://media.licdn.com/dms/image/D5612AQEYaJNientWVA/article-cover_image-shrink_600_2000/0/1708815657618?e=2147483647&v=beta&t=Wo-l-uW6y73PrumTsdNgDpzWsM00vxtuLyreFo0hneY' alt="Company" className="w-2/3 h-1/8 object-cover mb-4" />
        <Link to="/Company-growth"><h2 className="text-lg font-bold mb-4">Company Growth</h2></Link>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg shadow-md flex flex-col justify-center items-center hover:shadow-lg hover:border-blue-800 transition duration-300">
        <img src="https://img.freepik.com/premium-vector/benchmarking-as-business-compare-tool-improvement-progress-people-with-laptop-sits-scale-balances-with-charts-graphs-comparison-quality-cost-performance-competitor-companies_458444-1093.jpg" alt="Company" className="w-2/3 h-full object-cover mb-4" />
        <Link to="/Company-Performance"><h2 className="text-lg font-bold mb-4">Company Performance</h2></Link>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg shadow-md flex flex-col justify-center items-center hover:shadow-lg hover:border-blue-800 transition duration-300">
        <img src="https://img.freepik.com/premium-photo/vector-colleagues-working-together-project_575980-16616.jpg?size=626&ext=jpg&ga=GA1.1.1887574231.1711756800&semt=ais" alt="Company" className="w-2/3 h-full object-cover mb-4" />
        <Link to="/Services-Provided"><h2 className="text-lg font-bold mb-4">Services Provided</h2></Link>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg shadow-md flex flex-col justify-center items-center hover:shadow-lg hover:border-blue-800 transition duration-300">
        <img src="https://www.aihr.com/wp-content/uploads/Learning-development-jobs.jpg" alt="Company" className="w-2/3 h-full object-cover mb-4" />
        <Link to="/Employee-Growth"><h2 className="text-lg font-bold mb-4">Employee Growth</h2></Link>
      </div>
    </div>
  );
};

export default Dashboard;8