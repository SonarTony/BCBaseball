import React, { useState, useEffect } from 'react';
const DataFetcher = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const apiUrl = 'https://randomuser.me/api/?results=1&inc=name&noinfo';
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data: {error.message}</p>;
  return (
    <div>
      <h2>Fetched Data</h2>
      {data.results && data.results.map((result, index) => (
        <div key={index}>
          <p>Title: {result.name.title}</p>
          <p>First Name: {result.name.first}</p>
          <p>Last Name: {result.name.last}</p>
        </div>
      ))}
    </div>
  );
};
export default DataFetcher;


