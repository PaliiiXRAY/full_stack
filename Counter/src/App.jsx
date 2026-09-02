import { useState } from 'react';
function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div >
      <h1>Counter App</h1>
      <h2 className="count-display">{count}</h2>
      <div className="button-group">
        <button onClick={decrement}>- Decrement</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increment}>+ Increment</button>
      </div>
    </div>
  );
}

export default App;
