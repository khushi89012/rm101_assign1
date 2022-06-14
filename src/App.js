import "./App.css";
import React,{useState} from 'react';

function App() {

  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  }

  const handleDecrement = () => {
    if(count === 0) {
      return;
    }
    setCount(count - 1);
  }

  

  return (
    <div className="App">
      <h2 data-testid="counter-value">{count}</h2>
      {count > 0 ?
      <button data-testid="counter-decrement-button" 
      onClick={handleDecrement}
      > - </button>
      : 
      <button data-testid="counter-decrement-button" disabled> - </button>
      }

      <button data-testid="counter-increment-button"
      onClick={handleIncrement}
      > + </button>
    </div>
  );
}

export default App;
