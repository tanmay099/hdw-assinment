import React,{useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import  GetMatchSchedule from './components/GetMatchSchedule'






function App() {
  const [model, setModel] = useState(null);
  const [status, setStatus] = useState("upcoming")
  const [type, setType] = useState("domestic")
  

 


  if(model){

  }
// useEffect(() => {
//  const getData = fetch('https://tachyons.io')

//  getData.then(console.log(data))
// }, [])

  return (
    <div className="App">
  <h1 className="f4 bold center mw5">Schedule</h1>
  <div className="shadow-1 mt2  w-100 pa3 mr2 flex flex-row justify-center">
         <div className="ba  ph1 pv1 b--light-gray" onClick={() => setStatus("upcoming")}>Upcoming</div>
         <div className="bt bb ph1 pv1 b--light-gray" onClick={() => setStatus("running")}>Running</div>
         <div className="ba ph1 pv1 b--light-gray" onClick={() => setStatus("completed")}>Completed</div>
  </div>
  <div class="dt dt--fixed">
  <div onClick={() => setType("all")}  class="dtc tc pv4 bg-black-10">
    All
  </div>
  <div  onClick={() => setType("international")} class="dtc tc pv4 bg-black-05">
    Domestic
  </div>
  <div  onClick={() => setType("domestic")} class="dtc tc pv4 bg-black-10">
    International
  </div>
</div>
         <GetMatchSchedule type={type} status={status} page={0}/>
    </div>
  );
}

export default App;
