import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer>
          This project was coded by{" "}
         Liana
    
          and is{" "}
         
        
            open-sourced on GitHub
         
            hosted on Netlify
          
        </footer>
      </div>
    </div>
  );
}
