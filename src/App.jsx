import React, { useState } from "react";
import Todolist from "./Todolist";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import ControlPointOutlinedIcon from "@material-ui/icons/ControlPointOutlined";

const App = () => {
  const [inputlist, setinputlist] = useState("");
  const [items, setitems] = useState([]);

  const itemevent = (event) => {
    setinputlist(event.target.value);
  };

  const listofitems = () => {
    setitems((olditems) => {
      return [...olditems, inputlist];
    });

    setinputlist("");
  };

  const deleteItems = (id) => {
    console.log("deleted");
    setitems((olditems) => {
      return olditems.filter((arrElement, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="main">
        <div className="center">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input
            type="text"
            className="input"
            placeholder="Add items"
            onChange={itemevent}
            value={inputlist}
          />
          <ControlPointOutlinedIcon color="pink" onClick={listofitems}>
            +
          </ControlPointOutlinedIcon>

          <ol>
            {items.map((itemval, index) => {
              return (
                <Todolist
                  key={index}
                  id={index}
                  text={itemval}
                  onSelect={deleteItems}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};
export default App;
