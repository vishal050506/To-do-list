const Todoitem = ({ todoname, tododate ,ondeleteclick}) => {
  // let todoname = "Buttermilk";
  // let tododate = "4/10/23";
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6">{todoname}</div>
          <div className="col-4">{tododate}</div>
          <div className="col-2">
            <button type="button" className="btn btn-danger vi-button" onClick={()=>ondeleteclick(todoname)}>
              DELETE
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todoitem;
