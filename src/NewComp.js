import React, { useState } from 'react';

const NewComp = () => {
  const [count, setCount] = useState(0);

  const incrementByone = () => {
    setCount((count)=> count + 1);
  };

  const incrementByFour = () => {
    for (let i = 0; i < 4; i++) {
      incrementByone();
    }
  };

  return (
    <div className="App">
      <button onClick={incrementByone}> incrementByone </button>
      <button onClick={incrementByFour}> incrementByFour </button>
      <div>{count}</div>
    </div>
  );
};

export default NewComp;
