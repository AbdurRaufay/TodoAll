import React from "react";

const DropDown = ({ Todos, handleFilter }) => {
  return (
    <div className="drop-down">
      <select
        className="selec"
        onChange={(e) => {
          handleFilter(e);
        }}
      >
        <option className="opt" value={""}>
          To Do
        </option>
        {Todos.map((element) => {
          return (
            <option className="opt" key={element.id} value={element.id}>
              {element.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default DropDown;
