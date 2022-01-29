import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [list, setList] = useState(new Values("#12dd34").all(10));
  const [error, setError] = useState(false);

  const formHandler = (e) => {
    e.preventDefault();
    try {
      let newColor = new Values(color).all(10);
      setList(newColor);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };
  return (
    <>
      <section className='container'>
        <h3>color generator</h3>
        <form onSubmit={formHandler}>
          <input
            type='string'
            value={color}
            maxLength={7}
            placeholder='#f15025'
            className={`${error ? "error" : null}`}
            onChange={(e) => setColor(e.target.value)}
          />
          <button type='submit' className='btn'>
            generate
          </button>
        </form>
      </section>
      <section className='colors'>
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
