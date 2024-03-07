// another method
import React, { useState } from "react";

const Count = () => {
  const [count, setCount] = useState({ value: "", dataEntered: [] });

  const counter = [];
  for (let i = 0; i < count.value; i++) {
    counter.push(i);
  }

  return (
    <>
      <input
        type="text"
        onChange={(e) => setCount({ ...count, value: e.target.value })}
        value={count.value}
      />
      <div>
        {counter.map((item, index) => (
          <>
            <input
              type="text"
              onChange={(e) => {
                // setCount({ ...count, dataEntered: [e.target.value] })
                let newDataEntered = [...count.dataEntered];
                newDataEntered[index] = e.target.value;
                setCount({ ...count, dataEntered: newDataEntered });
              }}
            />
            <br />
          </>
        ))}
      </div>
      {/* Array.isArray method is to check is an array  or not an an array*/}
      {Array.isArray(count.dataEntered) &&
        count.dataEntered.map((item) => <p>{item}</p>)}
      <div></div>
    </>
  );
};

export default Count;
