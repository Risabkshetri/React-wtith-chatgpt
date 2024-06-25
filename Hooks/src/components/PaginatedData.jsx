import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PaginatedData = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`)
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('There was an error!', error);
        setLoading(false);
      });
  }, [page]);

  const handleNextPage = () => setPage(prevPage => prevPage + 1);
  const handlePreviousPage = () => setPage(prevPage => Math.max(prevPage - 1, 1));

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <ul>
        {data.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <button onClick={handlePreviousPage} disabled={page === 1}>Previous</button>
      <button onClick={handleNextPage}>Next</button>
    </div>
  );
};

export default PaginatedData;
