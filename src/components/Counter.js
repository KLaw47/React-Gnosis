import { useState } from 'react';

function Counter() {
  // declare a state variable named count and a function to update it named setCount
  const [count, setCount] = useState(0);

  const increment = () => { setCount(count + 1); };

  //decrement conditional only if count is greater than 0.
  const decrement = () => {
    if (count >0 ) {
      setCount(count - 1);
    } else {
      setCount(0);
    }
  };

  // i wrote this function to change the color in a more dynamic way, red at 0, green at the 10th increment and black otherwise.
  const getColor = () => {
    if (count === 0) return 'red';
    if (count % 10 === 0) return 'green';
    return 'black';
  };

  return (
    <>
      <h1>Counter</h1>
      {/* <p style= {{ color: count === 0 ? 'red' : 'black'}}> */}
      <p style={{ color: getColor()}}>
        Current count {count}
        </p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
}

export default Counter;
