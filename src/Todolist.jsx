import React from "react";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";

const Todolist = (props) => {
  return (
    <>
      <div className="todostyle">
        <CloseRoundedIcon
          className="ic"
          onClick={() => {
            props.onSelect(props.id);
          }}
        ></CloseRoundedIcon>
        <li> {props.text}</li>
      </div>
    </>
  );
};

export default Todolist;
