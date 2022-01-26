import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ title, info }) => {
  const [state, setState] = useState(false);

  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        <button className='btn' onClick={() => setState(!state)}>
          {state ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {state && <p>{info}</p>}
    </article>
  );
};

export default Question;
