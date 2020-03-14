import React, { useState } from "react";
import "./App.css";
import GetMatchSchedule from "./components/GetMatchSchedule";

function App() {
  const [status, setStatus] = useState("upcoming");
  const [type, setType] = useState("domestic");

  return (
    <div className="App bg-near-white">
      <h1 className="f4 bold center mw5">Schedule</h1>
      <div className="shadow-1">
        <div className="bg-white mt2  w-100 pa3 mr2 flex flex-row justify-center">
          <div
            style={{ color: status === "upcoming" ? "#FF725C" : "#555555" }}
            className="ba  ph1 pv1 b--light-gray"
            onClick={() => setStatus("upcoming")}
          >
            Upcoming
          </div>
          <div
            style={{ color: status === "running" ? "#FF725C" : "#555555" }}
            className="bt bb ph1 pv1 b--light-gray"
            onClick={() => setStatus("running")}
          >
            Running
          </div>
          <div
            style={{ color: status === "completed" ? "#FF725C" : "#555555" }}
            className="ba ph1 pv1 b--light-gray"
            onClick={() => setStatus("completed")}
          >
            Completed
          </div>
        </div>
        <div className="bg-white dt dt--fixed">
          <div
            style={{ borderBottom: type === "all" ? "2px solid #FF725C" : "" }}
            onClick={() => setType("all")}
            className="dtc tc pv2 "
          >
            All
          </div>
          <div
            style={{
              borderBottom: type === "domestic" ? "2px solid #FF725C" : ""
            }}
            onClick={() => setType("domestic")}
            className="dtc tc pv2 "
          >
            Domestic
          </div>
          <div
            style={{
              borderBottom: type === "international" ? "2px solid #FF725C" : ""
            }}
            onClick={() => setType("international")}
            className="dtc tc pv2 "
          >
            International
          </div>
        </div>
      </div>
      <GetMatchSchedule type={type} status={status} page={0} />
    </div>
  );
}

export default App;
