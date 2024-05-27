import React from 'react';

const ConnectionPage = () => {
  // Dummy data for the cards
  const connections = [
    { id: 1, name: 'Ravi Patel', occupation: 'Web Developer', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdxPskmKnpGbyosQLfBP1eNc_E--lqHTqvgqt_roQRug&s' },
    { id: 3, name: 'Vikram Singh', occupation: 'Marketing Manager', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStavxI1S8g_cB48cd_SYDBUg9JkbPJ907PdpbQKsbB3G64kOdVizpH_RLpPytex9o50tw&usqp=CAU' },
    { id: 4, name: 'Aarti Gupta', occupation: 'HR Manager', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA2yugsZhCZUEj8Z9pueoB4XUK68K1bf70SBEM4kTg4w-m6DtYznYWctnGK2RMOzXW6QQ&usqp=CAU' },
    { id: 5, name: 'Rahul Kumar', occupation: 'Accountant', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvPtirJ2HDML6tK9eumfuLmbXXJDAUqPJENjkqEdW81s-_2lWvUHCIImYuh-4a6bEBmLk&usqp=CAU' },
    { id: 6, name: 'Anjali Yadav', occupation: 'Software Engineer', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQZuMbxwpY0k8wb17mxHti5i9gDLzRn05JdLKk2nWXmqRDUCsGjPPYOU7dbC6kCUfhwkA&usqp=CAU' },
    { id: 7, name: 'Amit Verma', occupation: 'UX Designer', image: 'https://www.shutterstock.com/image-vector/job-interview-vector-illustration-concept-600nw-2005325384.jpg' },
    { id: 8, name: 'Sneha Mishra', occupation: 'Financial Analyst', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBboaqH4INEF6PulZdVtEB21bJCoelCoQVWw&s' },
    { id: 9, name: 'Neha Singh', occupation: 'Content Writer', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjDtS56q4sn88ROnv_68yEs_vJ42Di4qLE5g&s' },
    
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-8">My Network</h1>
      <div className="flex flex-wrap justify-center">
        {connections.map(connection => (
          <div key={connection.id} className="max-w-sm rounded overflow-hidden shadow-lg m-4">
            <img className="w-full" src={connection.image} alt={connection.name} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{connection.name}</div>
              <p className="text-gray-700 text-base">{connection.occupation}</p>
              <button className="bg-blue-500 hover:bg-blue-700 text-blue font-bold py-2 px-4 rounded mr-2">Connect</button>
              <button className="bg-blue-500 hover:bg-blue-700 text-blue font-bold py-2 px-4 rounded">Message</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConnectionPage;
