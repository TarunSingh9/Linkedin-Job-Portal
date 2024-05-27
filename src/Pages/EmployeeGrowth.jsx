import React from 'react';
import { Link } from 'react-router-dom';

const EmployeeGrowth = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen" style={{ backgroundImage: `url('https://www.shutterstock.com/shutterstock/photos/543159079/display_1500/stock-photo-grey-gradient-abstract-studio-background-543159079.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <h1 className="text-3xl font-bold mb-8">Progress & Prosperity: Personal and Company Growth Journey</h1>
      <div className="flex justify-center space-x-8">
        {/* Company Growth Card */}
        <div className="max-w-xs bg-brown overflow-hidden shadow-lg">
          <img className="w-full" src="https://img.freepik.com/premium-photo/symbol-business-goal-business-target-icon-goal-achievement-symbol-business-vision-corporate-o_980716-77378.jpg" alt="Company Growth" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Company Growth</div>
            <p className="text-gray-700 text-base">
              This card showcases the growth of the company over time.
            </p>
          </div>
          <div className="px-6 py-4">
            <Link to="/Company-Information"><h2 className="bg-blue-500 hover:bg-blue-700 text-blue font-bold py-2 px-4 rounded">View More</h2></Link>
          </div>
        </div>

        {/* User Growth Card */}
        <div className="max-w-xs rounded overflow-hidden shadow-lg">
          <img className="w-2/7" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7m0hGjmdXS3YSNnlnXx2AIvbiAha99ysVw9K3BPAOwWhFbUMc2lXV3x3Z9fuVjIAgvMY&usqp=CAU" alt="User Growth" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">User Growth</div>
            <p className="text-gray-700 text-base">
              This card showcases the growth of users utilizing our services.
            </p>
          </div>
          <div className="px-6 py-4">
            <Link to="/user-growth"><h2 className="bg-blue-500 hover:bg-blue-700 text-blue font-bold py-2 px-4 rounded">View More</h2></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeGrowth;
