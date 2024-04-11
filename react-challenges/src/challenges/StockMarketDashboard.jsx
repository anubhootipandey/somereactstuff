import React, { useState, useEffect } from 'react';

const StockMarketDashboard = () => {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    // Fetch stock data from an API
    const fetchStockData = async () => {
      try {
        const response = await fetch('https://api.example.com/stocks');
        if (!response.ok) {
          throw new Error('Failed to fetch stock data');
        }
        const data = await response.json();
        setStocks(data);
      } catch (error) {
        console.error('Error fetching stock data:', error);
      }
    };

    fetchStockData();
  }, []);

  return (
    <div>
      <h1>Stock Market Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Name</th>
            <th>Price</th>
            <th>Change</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map(stock => (
            <tr key={stock.symbol}>
              <td>{stock.symbol}</td>
              <td>{stock.name}</td>
              <td>{stock.price}</td>
              <td>{stock.change}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockMarketDashboard;
