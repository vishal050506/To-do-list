import { useState } from "react";

function Rows({ newitem }) {
  const [name, setname] = useState();
  const [date, setdate] = useState();

  const handlename = (event) => {
    setname(event.target.value);
  };
  const handledate = (event) => {
    setdate(event.target.value);
  };

  const handlebuttonclicked = () => {
    newitem(name, date);
    setname(" ");
    setdate(" ");
  };
  return (
    <>
      <div className="container  mt-5">
        <div className="row">
          <div className="col-6">
            <input
              type="text"
              placeholder="Enter Todo here"
              onChange={handlename}
              value={name}
              className="name"
            />
          </div>
          <div className="col-4">
            <input type="date" onChange={handledate} value={date} className="name"/>
          </div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-success vi-button"
              onClick={handlebuttonclicked}
            >
              ADD
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Rows;
