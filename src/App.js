import React, { useEffect, useState } from "react";
import AddTask from "./AddTask";
import "./App.css";
import DropDown from "./DropDown";
import Search from "./Search";
import TodoList from "./TodoList";

const getLocalItem = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(localStorage.getItem("list"));
  } else {
    return [];
  }
};

const App = () => {
  const [Todo, setTodo] = useState("");
  const [Todos, setTodos] = useState(getLocalItem());
  const [Toggle, setToggle] = useState(true);
  const [TodoId, setTodoId] = useState(null);
  const [searchId, setSearchId] = useState("");

  const [SearchTerm, setSearchTerm] = useState("");

  const [search, setSearch] = useState(false);
  const [filter, setfilter] = useState(false);

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(Todos));
  }, [Todos]);

  const handleClick = (e) => {
    e.preventDefault();
    if (!Todo) {
      alert("please write something");
    } else if (Todo && !Toggle) {
      setTodos(
        Todos.map((elem) => {
          if (elem.id === TodoId) {
            return { ...elem, name: Todo };
          }
          return elem;
        })
      );
      setToggle(true);
      setTodo("");
      setTodoId(null);
    } else {
      const todoList = { id: new Date().getTime().toString(), name: Todo };
      setTodos([...Todos, todoList]);
      setTodo("");
    }
  };
  const handleDelete = (index) => {
    const updateTodos = Todos.filter((elem) => {
      return !index == elem.id;
    });
    setTodos(updateTodos);
  };
  const handleEdit = (id) => {
    const Edit = Todos.find((elem) => {
      return elem.id == id;
    });
    setToggle(false);
    setTodo(Edit.name);
    setTodoId(id);
  };

  const handleFilter = (event) => {
    const getId = event.target.value;
    setSearchId(getId);
    setfilter(true);
    setSearch(false);
    getData(getId);
  };

  const getData = () => {
    if (search) {
      if (SearchTerm == "") {
        return Todos;
      } else {
        const searchTodo = Todos.find((elem) => elem.name == SearchTerm);
        if (searchTodo) {
          return [searchTodo];
        } else {
          return Todos;
        }
      }
    } else {
      return Todos;
    }
  };
  return (
    <div className="container wrapp">
      <div className="main">
        <div className="head">
          <h2 className="spa">To Do App</h2>
        </div>
        <AddTask
          Todo={Todo}
          setTodo={setTodo}
          Toggle={Toggle}
          handleClick={handleClick}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
        <br />
        <DropDown Todos={Todos} handleFilter={handleFilter} />

        <Search
          SearchTerm={SearchTerm}
          setSearchTerm={setSearchTerm}
          getData={getData}
          setSearch={setSearch}
          setfilter={setfilter}
        />
        <br />
      </div>
      <TodoList
        Todos={Todos}
        getData={getData}
        searchId={searchId}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        setTodo={setTodo}
        Todo={Todo}
        handleClick={handleClick}
      />
    </div>
  );
};

export default App;
