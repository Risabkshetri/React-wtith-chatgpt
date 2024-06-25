import { useState, useEffect } from 'react';

function DataFetching() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        setData(data);
        console.log(data);
        setLoading(false);
      })
     .catch(error => console.error('Error', error));
  }, []); // Empty dependency array means this effect runs once after the initial render

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Posts</h1>
      <div style={{ display: 'grid' , gridTemplateColumns: 'repeat(3, 1fr)', gap: '5px' }}>
        {data.map(post => (
          <div key={post.id} style={{ border: '1px solid gray' }}>
            <h3 style={{ color: 'red' }}>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DataFetching;
