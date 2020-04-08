import React from "react";
import Covid19 from "./covid19/Covid19";
import css from "./App.module.css";
import "./App.css";
import "../assets/fonts/fonts.css";

const App = () => {

  return (
    
    <div className={css.background}>
      <Covid19 />
    </div>
  );
};
export default App;
