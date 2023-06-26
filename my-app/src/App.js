import './App.css';
import {useState, useEffect} from 'react'
import AdviceCard from './AdviceCard';

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
        <AdviceCard result={result} nextAdvice={nextAdvice} />

    </div>
  );
}

export default App;
