import Todoitem from "./Todoitem";
const Manyitems = ({state , ondeleteclick}) => {
  return (
    
      <div className="items-container">
        {state.map((item) => (
          <Todoitem todoname={item.name} tododate={item.duedate} ondeleteclick ={ondeleteclick}/>
        ))}
      </div>
    
  );
};

export default Manyitems;
