import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import generatePdf from './ReportGenerator';

function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios("https://kams-consumption-api.herokuapp.com/items").then((items) =>
      setItems(items.data)
    );
  },[]);
  
  return (
    <div className="App">
      <button className="btn btn-primary" onClick={()=> generatePdf(items)}>Get Report</button>
       
    </div>
  );
}

export default App;
