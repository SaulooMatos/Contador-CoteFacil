import React, { useState, useEffect } from 'react';
import './styles/global.css';

function App() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setCount(prev => prev + 1);
      }, 1000);
    } else if (!isRunning && interval !== null) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const handleIncrement = () => {
    setCount(prev => prev + 1);
  };

  const handleDecrement = () => {
    setCount(prev => prev - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const numberColor = count % 2 === 0 ? '#00ff88' : '#ffffff';

  return (
    <div className="container">
      <h1 className="title"> Cote Fácil - Relógio Contador</h1>
      <div className="display">
        <span style={{ color: numberColor }}>{count}</span>
      </div>
      <div className="buttons">
        <button onClick={handleIncrement}>+1</button>
        <button onClick={handleDecrement}>-1</button>
        <button onClick={handleReset}>🔁 Reiniciar</button>
        <button onClick={toggleTimer}>
          {isRunning ? '⏹ Parar Cronômetro' : '▶ Iniciar Cronômetro'}
        </button>
      </div>
    </div>
  );
}

export default App;
