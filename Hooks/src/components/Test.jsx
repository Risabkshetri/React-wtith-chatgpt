import { useState, useEffect } from 'react'

function Test() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        // This will run once when the component is mounted
        console.log('Component mounted');
    
        // This will run when the component is unmounted
        return () => {
          console.log('Component unmounted');
        };
      }, []);
    
useEffect(() => {
    console.log(`Component rendered with count: ${count}`);
    
});

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}

export default Test