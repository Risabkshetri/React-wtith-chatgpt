import { useState, useEffect } from 'react';
import axios from 'axios';

const MultipleRequests = () => {
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState(null);

//   useEffect(() => {
//     axios.all([
//       axios.get('https://jsonplaceholder.typicode.com/posts/1'),
//       axios.get('https://jsonplaceholder.typicode.com/posts/1/comments')
//     ])
//     .then(axios.spread((postResponse, commentsResponse) => {
//       setPost(postResponse.data);
//       setComments(commentsResponse.data);
//     }))
//     .catch(error => console.error('There was an error!', error));
//   }, []);

 useEffect(() => {
    axios.all([
        axios.get('https://jsonplaceholder.typicode.com/posts/1'),
        axios.get('https://jsonplaceholder.typicode.com/posts/1/comments')
    ])
    .then(axios.spread((postResponse, commentsResponse) => {
      setPost(postResponse.data);
      setComments(commentsResponse.data);
    }))
    .catch(error => console.error('There was an error!', error));
 },[]);
  if (!post || !comments) return <p>Loading...</p>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <h2>Comments</h2>
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>{comment.body}</li>
        ))}
      </ul>
    </div>
  );
};

export default MultipleRequests;
