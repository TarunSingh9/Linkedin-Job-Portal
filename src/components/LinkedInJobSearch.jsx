import React from 'react';
import ServiceOfferBarChart from '../components/ServiceOfferBarChart'

const LinkedInJobSearch = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div>
          <h2 className="text-4xl font-bold mb-4">Enhancements and Services Provided</h2>
          <p className="text-gray-600 mb-4">The need and importance of services provided by a company on LinkedIn for professional job searching are significant for both job seekers and employers:</p>
          <ul className="text-lg text-gray-700 mb-6">
            <li><strong>Number of Qualified Candidates Reached:</strong>This metric demonstrates the effectiveness of leveraging LinkedIn network in accessing a diverse talent pool.</li>
            <li><strong>Brand Visibility Index:</strong>A measure of how visible the company brand is on LinkedIn compared to competitors, indicating the success of efforts in enhancing brand reputation.</li>
            <li><strong>Recruitment Efficiency:</strong>Tracking metrics such as time-to-hire, cost-per-hire, and applicant quality can indicate how streamlined the recruitment process has become.</li>
            <li><strong>Targeting Effectiveness:</strong>This metric measures the success rate of targeting specific demographics, industries, or skill sets in attracting qualified candidates.</li>
            <li><strong>Networking Engagement</strong>Tracking the growth of connections, interactions, and relationships built on LinkedIn can showcase the effectiveness of networking efforts in building a talent pipeline and fostering long-term relationships.</li>
          </ul>
        </div>
        <div className="w-full md:w-2/5 mt-8 md:mt-0">
        <ServiceOfferBarChart/>
        </div>
      </div>
    </div>
  );
};

export default LinkedInJobSearch;
