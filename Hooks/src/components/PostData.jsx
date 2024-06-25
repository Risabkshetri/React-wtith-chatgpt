import { useState } from 'react';
import axios from 'axios';

const PostData = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [response, setResponse] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('https://jsonplaceholder.typicode.com/posts', { title, body })
      .then(response => {
        setResponse(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Body</label>
          <textarea value={body} onChange={(e) => setBody(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>
      {response && (
        <div>
          <h1>{response.title}</h1>
          <p>{response.body}</p>
        </div>
      )}
    </div>
  );
};

export default PostData;
