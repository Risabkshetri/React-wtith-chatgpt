import {useState} from 'react'

function UseState() {
    const [count, setCount] = useState(0)

  return (
    <>
    <h1>{count}</h1>
    <button onClick={() => setCount(count + 1)}>+</button>
    <button onClick={() => setCount(count - 1)}>-</button>
    </>
  )
}

export default UseState