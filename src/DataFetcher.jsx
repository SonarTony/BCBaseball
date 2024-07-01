import React, { useState, useEffect } from 'react';
const DataFetcher = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    const apiUrl = 'https://randomuser.me/api/?results=1&inc=name&noinfo&gender=male&nat=US';
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
  };
  const handleButtonClick = () => {
    fetchData();
  };
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data: {error.message}</p>;
  return (
    <div>
      <h2>Fetched Data</h2>
      <p>Title: {data.results[0]?.name.title}</p>
      <p>First Name: {data.results[0]?.name.first}</p>
      <p>Last Name: {data.results[0]?.name.last}</p>
      <button onClick={handleButtonClick}>Fetch New Name</button>
    </div>
  );
};
export default DataFetcher;


