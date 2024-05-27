
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const NonprofitOrgan = () => {
  const data = [
    { name: 'Marketing', Nonprofit: 400, Technology: 240, Finance: 240 },
    { name: 'Development', Nonprofit: 300, Technology: 139, Finance: 221 },
    { name: 'Operations', Nonprofit: 200, Technology: 980, Finance: 229 },
    { name: 'Administration', Nonprofit: 278, Technology: 390, Finance: 200 },
  ];

  return (
    <div className="container mx-auto p-6 flex">
      <div className="w-1/2 h-1/2 p-6">
        <h2 className="text-3xl font-semibold mb-4">Nonprofit Organizations</h2>
        <p className="text-lg text-gray-700 mb-6">
          Nonprofit organizations serve society needs, not profit. They span diverse sectors like healthcare, education, and humanitarian aid.
          They offer roles in program management, fundraising, advocacy, and administration.
          Job seekers can find opportunities through online platforms and volunteering.
        </p>
        <p className="text-lg text-gray-700 mb-6">      
         Nonprofit organizations are entities that operate without the primary goal of making a profit. Instead, they pursue missions that aim to benefit society, address social or environmental issues, or serve specific communities. These organizations can encompass a wide range of sectors, including healthcare, education, humanitarian aid, environmental conservation, arts and culture, and more.
        </p>
      </div>
      <div className="w-1/2 h-1/2 p-6">
        <BarChart
          width={700}
          height={400}
          data={data}
          margin={{ top: 20, right: 10, left: 90, bottom: 5 }} // Adjusted left margin to 60
        >
          <CartesianGrid strokeDasharray="4 2" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Nonprofit" fill="#8884d8" />
          <Bar dataKey="Technology" fill="#82ca9d" />
          <Bar dataKey="Finance" fill="#ffc658" />
        </BarChart>
      </div>
    </div>
  );
};

export default NonprofitOrgan;
