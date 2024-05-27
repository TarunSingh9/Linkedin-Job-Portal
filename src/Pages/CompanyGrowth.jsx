import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';

const CompanyGrowth = () => {
  const [chartData, setChartData] = useState(null);
  const [indianChartData, setIndianChartData] = useState(null);

  useEffect(() => {
    // Mock data for demonstration
    const topCompanies = [
      'Amazon',
      'Apple Inc.',
      'Microsoft Corporation',
      'Alphabet Inc. (Google)',
      'Facebook (Meta Platforms, Inc.)',
      'Tesla, Inc.',
      'Alibaba Group Holding Limited',
      'Tencent Holdings Limited',
      'Visa Inc.',
      'Mastercard Incorporated',
    ];

    const growthData = {
      RevenueGrowth: [9, 8, 7, 6, 5, 4, 3, 2, 1, 5], // Example ranks for Revenue Growth
      ProfitGrowth: [8, 7, 9, 6, 5, 4, 3, 2, 1, 6], // Example ranks for Profit Growth
      MarketShareGrowth: [7, 6, 5, 8, 4, 3, 9, 2, 1, 4], // Example ranks for Market Share Growth
      CustomerGrowth: [6, 7, 8, 5, 4, 9, 3, 2, 1, 8], // Example ranks for Customer Growth
    };

    // Calculate average ranks
    const averageRanks = {};
    Object.keys(growthData).forEach(category => {
      const ranks = growthData[category];
      const averageRank = ranks.reduce((acc, rank) => acc + rank, 0) / ranks.length;
      averageRanks[category] = averageRank;
    });

    // Sort companies based on average ranks
    const sortedCompanies = topCompanies.sort((a, b) => {
      const aRank = averageRanks[a];
      const bRank = averageRanks[b];
      return aRank - bRank;
    });

    // Prepare data for chart
    const labels = sortedCompanies;
    const datasets = Object.keys(growthData).map((category, index) => ({
      label: category,
      data: sortedCompanies.map(company => growthData[category][topCompanies.indexOf(company)]),
      backgroundColor: ['#5BBCFF', '#FFFAB7', '#FFD1E3', '#7EA1FF'][index % 4], // Using specified colors
    }));

    setChartData({ labels, datasets });
  }, []);

  useEffect(() => {
    if (chartData) {
      const ctx = document.getElementById('companyGrowthChart');
      new Chart(ctx, {
        type: 'bar',
        data: chartData,
        options: {
          indexAxis: 'x', // Horizontal bars
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });

      // Add a second chart for stacked bar chart
      const stackedChartCtx = document.getElementById('stackedCompanyGrowthChart');
      new Chart(stackedChartCtx, {
        type: 'bar',
        data: chartData,
        options: {
          indexAxis: 'y', // Horizontal bars
          scales: {
            y: {
              stacked: true,
              beginAtZero: true,
            },
          },
        },
      });
    }
  }, [chartData]);

  useEffect(() => {
    // Indian company data
    const indianCompanies = [
      'Reliance Industries Limited (RIL)',
      'Tata Consultancy Services (TCS)',
      'HDFC Bank',
      'Infosys',
      'ICICI Bank',
      'HCL Technologies',
      'State Bank of India (SBI)',
      'Bharti Airtel',
      'Larsen & Toubro (L&T)',
      'Axis Bank',
    ];

    const indianGrowthData = {
      RevenueGrowth: [5, 8, 7, 6, 5, 4, 3, 2, 1, 5],
      ProfitGrowth: [2, 7, 9, 5, 5, 4, 3, 2, 8, 4],
      MarketShareGrowth: [7, 6, 5, 3, 4, 8, 4, 2, 1, 4],
      CustomerGrowth: [4, 7, 8, 7, 4, 6, 3, 2, 1, 8],
    };

    // Prepare data for chart
    const labels = indianCompanies;
    const datasets = Object.keys(indianGrowthData).map((category, index) => ({
      label: category,
      data: indianCompanies.map(company => indianGrowthData[category][indianCompanies.indexOf(company)]),
      backgroundColor: ['#5BBCFF', '#FFFAB7', '#FFD1E3', '#7EA1FF'][index % 4], // Using specified colors
    }));

    setIndianChartData({ labels, datasets });
  }, []);

  useEffect(() => {
    if (indianChartData) {
      const ctx = document.getElementById('indianCompanyGrowthChart');
      new Chart(ctx, {
        type: 'bar',
        data: indianChartData,
        options: {
          indexAxis: 'x',
          responsive: true,
          maintainAspectRatio: false,
        },
      });

      // For Indian Company Growth Analysis
      const indianStackedChartCtx = document.getElementById('indianStackedCompanyGrowthChart');
      new Chart(indianStackedChartCtx, {
        type: 'bar',
        data: indianChartData,
        options: {
          indexAxis: 'y', // Horizontal bars
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              stacked: true,
              beginAtZero: true,
            },
          },
        },
      });
    }
  }, [indianChartData]);

  return (
    <div className="container mx-auto p-8">
      {/* Worldwide company data */}
      <h1 className="text-3xl font-bold mb-4">Worldwide Company Growth Analysis</h1>
      <p className="text-lg text-gray-700 mb-6">
        In this analysis, we explore the growth metrics of top companies
        worldwide, including revenue growth, profit growth, market share growth,
        and customer growth. Let delve into the data to understand the
        trajectory of these companies in the global market.
      </p>
      <div className="flex px-10 py-10 w-3/6 h-1/9 object-cover mb-4">
        <canvas id="companyGrowthChart" width="300" height="200"></canvas>
        <canvas id="stackedCompanyGrowthChart" width="300" height="200"></canvas>
      </div>

      <h1 className="text-3xl font-bold mb-4">Indian Company Growth Analysis</h1>
      <p className="text-lg text-gray-700 mb-6">
        In this analysis, we explore the growth metrics of top Indian companies,
        including revenue growth, profit growth, market share growth,
        and customer growth. Let delve into the data to understand the
        trajectory of these companies in the Indian market.
      </p>
      <div className="flex px-10 py-10 w-3/6 h-1/9 object-cover mb-4">
        <canvas id="indianCompanyGrowthChart" width="400" height="400"></canvas>
        <canvas id="indianStackedCompanyGrowthChart" width="300" height="200"></canvas>
      </div>
    </div>
  );
};

export default CompanyGrowth;
