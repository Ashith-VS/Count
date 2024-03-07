import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Counter = () => {
  const [count, setCount] = useState({ state: "", items: [] });

  const initialValue = () => {
    const result = [];
    for (let i = 0; i < count.state; i++) {
      result.push({ val: "" });
    }
    return result;
  };

  useEffect(() => {
    setCount((prevCount) => ({ ...prevCount, items: initialValue() }));
  }, [count.state]);

  const inputHandler = (e, i) => {
    const updatedItems = [...count.items];
    updatedItems[i][e.target.name] = e.target.value;
    setCount((prevCount) => ({ ...prevCount, items: updatedItems }));
  };
  console.log(count);

  return (
    <div className="container-fluid text-center bg-dark text-white mb-4 ">
      <div className="row justify-content-center ">
        <div className="col-md-2">
          <label className="mt-5 mb-4 text-white ">Count</label>
          <br />

          <input
            type="text"
            className="form-control mb-4"
            value={count.state}
            placeholder="Enter a number"
            onChange={(e) => setCount({ ...count, state: e.target.value })}
            validation
          />
        </div>
      </div>

      <form>
        {count.items.map((item, i) => (
          <div className="row mt-4" key={i}>
            <div className="col-md-6">
              <label className="form-label">Field id : {i + 1}</label>
              <input
                type="text"
                className="form-control"
                placeholder={`Enter the field value ${i + 1} `}
                name="val"
                value={item.val}
                onChange={(e) => inputHandler(e, i)}
              />
            </div>

            <div className="col-md-6 ">
              <p className="form-label">
                Field {i + 1} value : <br /> {item.val}
                <hr />
              </p>
            </div>
          </div>
        ))}
      </form>
    </div>
  );
};

export default Counter;
