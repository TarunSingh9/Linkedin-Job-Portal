import React from 'react';
import { Pie } from 'react-chartjs-2';

const StarPie = () => {
    const pieChartData = {
        labels: ['BYJU\'S', 'Ola', 'Paytm', 'Razorpay', 'Zomato', 'Unacademy', 'CRED', 'Nykaa', 'Meesho', 'Rivigo'],
        datasets: [
            {
                data: [10, 150, 200, 20, 190, 80, 70, 90, 60, 10],
                backgroundColor: ['#9195F6', '#B7C9F2', '#F9F07A', '#FB88B4', '#FF6384', '#3DDC84', '#FFD700', '#CD5C5C', '#4682B4', '#87CEEB'],
            },
        ],
    };

    return (
        <div className="flex flex-wrap justify-center  p-12">
            <div className="w-full md:w-1/5 lg:w-1/5 p-4">
                <h2 className="text-lg font-semibold mb-2">Top 10 Startup Companies</h2>
                <Pie data={pieChartData} />
            </div>
            <div className="w-full md:w-1/2 lg:w-3/5 p-4">
                <div className=" p-4 rounded-lg">
                    <h2 className="text-3xl font-semibold mb">Top 10 Startup Companies in 2022</h2>
                    <p className="text-lg text-gray-900  py-8">Startup companies in India are newly established ventures that aim to introduce innovative products, services, or business models into the market. These companies typically operate in dynamic and emerging sectors such as technology, e-commerce, fintech, healthcare, and education. They are characterized by their agility, risk-taking mentality, and focus on rapid growth and scalability.</p>
                    <h3 className="text-2xl font-bold">Advantages of Startup Companies in India:</h3>
                    <ol className="text-lg text-gray-900 py-8">
                        <li><strong>Innovation and Disruption:</strong> Startups bring fresh ideas and disruptive innovations to the market, challenging traditional industries and driving overall progress.</li>
                        <li><strong>Job Creation:</strong> Startups are significant contributors to job creation, especially among young professionals and skilled workers, thereby addressing unemployment challenges and fostering economic growth.</li>
                        <li><strong>Economic Growth:</strong> Startups contribute to economic growth by attracting investment, generating revenue, and fostering a culture of entrepreneurship that stimulates the broader economy.</li>
                        <li><strong>Flexibility and Agility:</strong> Startups are more agile and adaptable than larger corporations, allowing them to respond quickly to market changes, customer feedback, and emerging trends.</li>
                        <li><strong>Access to Global Markets:</strong> With the rise of digital technologies and globalization, startups have easier access to global markets, enabling them to scale their businesses internationally from an early stage.</li>
                        <li><strong>Talent Magnet:</strong> Startups often attract top talent by offering dynamic work environments, opportunities for skill development, and the potential for equity ownership, driving innovation and creativity within their teams.</li>
                        <li><strong>Government Support:</strong> Governments and regulatory bodies often provide support and incentives to startups through initiatives like tax benefits, funding programs, and incubation centers, fostering a conducive ecosystem for entrepreneurship.</li>
                    </ol>
                </div>
            </div>
        </div>
    );
}

export default StarPie;




