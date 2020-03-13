import React,{useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [data, setData] = useState(null);

useEffect(() => {
 const getData = fetch('https://tachyons.io')

 getData.then(console.log(data))
}, [])

  return (
    <div className="App">
<span className="f1">Hola App</span>
    </div>
  );
}

export default App;
