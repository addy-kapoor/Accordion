import React from 'react';
import { useState } from 'react';
// import { api } from "./Api";
export const MyAccordion = ({Question, Answer}) => {
    const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="main-heading">
        <p onClick={() => setOpen(!open)}>{open ? "➖" : "➕"}</p>
        <h3>{Question}</h3>
      </div>
      {open && <p className="answers">{Answer}</p>}
      {/* {open === true ? <div className="answers">{Answer}</div> : null} */}
    </div>
  );
}

// export default MyAccordion;
