import { useState } from "react";
import {api} from "./Api";
import "./App.css";
function App() {
  const [openIndex, setOpen] = useState(-1);
  const expand = (index) => {
    setOpen((prevOpen) => (
      prevOpen === index ? -1 : index
      ));
  };
  return (
    <div className="App">
      <div className="main-div">
        <h1>Frequently Asked Questions</h1>
        {api.map((curr, index) => (
          <div key={index}>
            <div key={index} className="main-heading">
              <p onClick={() => expand(index)}>
                {openIndex === index ? '➖' : '➕'}
              </p>
              <h3>{curr.Question}</h3>
            </div>
            {openIndex === index ? (
              <div className="answers">{curr.Answer}</div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
