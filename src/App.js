import {useState} from 'react'
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App" data-test='counter-component'>
      <h1 data-test="display-counter">The count is {count} </h1>
      <button
        data-test="increment-button"
        className="button"
        onClick={() => setCount(count + 1)}
        >
        Increment Counter
      </button>
    </div>
  );
}

export default App;
