import React from 'react';

const GrowthStrategy = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Company Growth Strategies</h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 px-4">
          <div className="mb-4">
            <p className="text-gray-700">
              Company growth strategies are plans and actions designed to increase a business market share, revenue, and profitability through various means such as market penetration, product development, market development, or diversification.
            </p>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Advantages</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Increased Market Share</li>
              <li>Diversification of Revenue Streams</li>
              <li>Enhanced Competitive Positioning</li>
              <li>Economies of Scale</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Disadvantages</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Resource Strain</li>
              <li>Loss of Agility</li>
              <li>Cultural Challenges</li>
              <li>Market Saturation and Competition</li>
              <li>Financial Risks</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
          <img src="https://img.freepik.com/premium-vector/vector-illustration-business-concept-with-office-people-working-together-analyzing-graphs_675567-2541.jpg" alt="Company Growth" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default GrowthStrategy;

