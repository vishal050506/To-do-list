import AppName from "./Components/AppName";
import Rows from "./Components/Rows";
import Manyitems from "./Components/Manyitems";
import "./App.css";
import Welcomemessage from "./Components/Welcomemessage";
import { useState } from "react";

function App() {
  const [state, setstate] = useState([]);
  const handlenewitem = (itemName, itemDueDate) => {
    console.log(`new item added : ${itemName} Date:${itemDueDate}`);
    const newtodoitems = [...state, { name: itemName, duedate: itemDueDate }];
    setstate(newtodoitems);
  };

  const handledeleteitem = (todoitemname) => {
    const newtodoitems = state.filter((item) => item.name !== todoitemname);
    setstate(newtodoitems);
  };

  return (
    <>
      <center className="todo-container">
        <AppName />
        <Rows newitem={handlenewitem} />
        {state.length === 0 && <Welcomemessage />}
        <Manyitems state={state} ondeleteclick={handledeleteitem} key={Manyitems}/>
      </center>
    </>
  );
}

export default App;
