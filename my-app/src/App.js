import './App.css';
import {useState, useEffect} from 'react'

function App() {
  const [result, setResult] = useState();

  useEffect(() => {
    getData();
  },[]);

  const getData = () => {
    fetch("https://api.adviceslip.com/advice")
      .then(res => res.json())
      .then(
        (resultData) => {
          console.log(resultData)
          setResult(resultData);
        },
        (error) => {
          console.log(error);
        }
      )
  };

  const nextAdvice = () => {
    getData();
  }

  return (
    <div className="App">
        {result && 
        <div>
          <h1>Advice # {result.slip.id}</h1>
          <h2>{result.slip.advice}</h2>
        </div>
        }
        <button onClick={nextAdvice}>Next Advice</button>

    </div>
  );
}

export default App;
