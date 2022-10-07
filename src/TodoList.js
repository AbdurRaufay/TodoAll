import React from "react";

const TodoList = ({
  Todos,
  getData,
  searchId,
  handleDelete,
  handleEdit,
  setTodo,
  Todo,
  handleClick,
}) => {
  return (
    <div>
      <div className="container">
        {Todos.length === 0 && "No items In the list"}
      </div>

      {getData()
        .filter((val) => {
          if (searchId == "") {
            return val;
          } else if (searchId === val.id) {
            return val.name;
          }
        })
        .map((elem) => {
          return (
            <div className="container">
              <ul className="main-list" key={elem.id}>
                <li>
                  <span
                    style={{
                      marginLeft: 20,
                      fontSize: 20,
                      fontFamily: "sans-serif",
                      color: "white",
                    }}
                  >
                    {elem.name}
                  </span>
                  {/* <button
                    className="btn btn-primary edit"
                    onClick={() => handleEdit(elem.id)}
                  >
                    Edit
                  </button> */}
                  <div className="edit-del">
                    <button
                      className="btn btn-danger del"
                      onClick={() => handleDelete(elem.id)}
                    >
                      Delete
                    </button>

                    {/* modal */}
                    <button
                      className="btn btn-primary edit"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      type="button"
                      onClick={() => handleEdit(elem.id)}
                    >
                      Edit
                    </button>
                  </div>
                  <div
                    class="modal fade"
                    id="exampleModal"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <form onSubmit={handleClick}>
                            <input
                              class="form-control edit-inp"
                              type="text"
                              style={{
                                width: 300,
                                marginLeft: 70,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                              value={Todo}
                              name="title"
                              onChange={(e) => {
                                setTodo(e.target.value);
                              }}
                            />
                            <div class="d-grid gap-2 col-6 mx-auto mt-5">
                              <button
                                class="btn btn-primary"
                                type="submit"
                                data-bs-dismiss="modal"
                                style={{ marginLeft: 0, width: 150 }}
                              >
                                Save
                              </button>
                            </div>
                          </form>
                          <button
                            type="button"
                            class="btn btn-secondary"
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              marginTop: 90,
                            }}
                            data-bs-dismiss="modal"
                            onClick={() => setTodo("")}
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Modal end */}
                </li>
              </ul>
            </div>
          );
        })}
    </div>
  );
};

export default TodoList;
