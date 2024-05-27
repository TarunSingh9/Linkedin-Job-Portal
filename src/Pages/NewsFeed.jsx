import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NewsFeed = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=7d09c1222ee54a4aa7f119fb7c6ee9c7');
        setNews(response.data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="container mx-auto mt-8 ">
      <h2 className="text-2xl font-bold mb-4 ">News Feed</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {news.map((article, index) => (
          <div key={index} className="bg-white p-4 rounded shadow flex flex-col justify-between hover:scale-105 hover:border-blue-500 transition-transform duration-300">
            <div className="h-30">
              <img
                src={article.urlToImage || 'https://via.placeholder.com/800x450'}
                alt="Image"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="h-37 p-4">
              <h3 className="text-lg font-bold mb-2">{article.title}</h3>
              <p className="text-gray-700">{article.description}</p>
            </div>
            <div className="h-8">
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                <button className="bg-blue-500 text-white bg-blue px-4 py-2 border border-black rounded">Read More</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsFeed;
