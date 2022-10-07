import React from "react";
const AddTask = ({ Todo, setTodo, Toggle, handleClick }) => {
  return (
    <div>
      <div className="center">
        <div class="d-flex mb-3">
          <input
            type="text"
            style={{ width: 400 }}
            placeholder="Add to do"
            class="form-control"
            required
            value={Todo}
            name="title"
            onChange={(e) => {
              setTodo(e.target.value);
            }}
          />
          <button
            className="btn btn-primary"
            style={{
              marginLeft: 2,
              paddingLeft: 20,
              paddingTop: 10,
              paddingBottom: 10,
              paddingRight: 20,
            }}
            onClick={handleClick}
          >
            Add Note
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
