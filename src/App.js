import {useState} from 'react'
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App" data-test='counter-component'>
      <h1 data-test="display-counter">The count is:
        <span data-test="count">{count}</span>
      </h1>
      <button
        className="button"
        onClick={() => setCount(count + 1 )}
        data-test="increment-button"
        >
        Increment Counter
      </button>
    </div>
  );
}

export default App;
