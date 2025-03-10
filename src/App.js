import { useState } from "react";

// const todos = [
//   { description: "Go to the Gym", completed: false },
//   { description: "Code Crunch", completed: false },
//   { description: "Go to the supermarket", completed: false },
// ];

export default function App() {
  const [todoList, setTodoList] = useState([]);
  const [newInput, setNewInput] = useState("");

  return (
    <div className="container">
      <Header />
      <SubmitInput
        newInput={newInput}
        setNewInput={setNewInput}
        todoList={todoList}
        setTodoList={setTodoList}
      />
      <List
        todoList={todoList}
        setTodoList={setTodoList}
        setNewInput={setNewInput}
      />
    </div>
  );
}

function Header() {
  return (
    <div>
      <i className="logo fa-solid fa-dice-d20"></i>
      <h1>Todo List App</h1>
      <p>Organize Your Day, One Task at a Time.</p>
    </div>
  );
}

function SubmitInput({ setNewInput, newInput, todoList, setTodoList }) {
  function storeInput(e) {
    setNewInput(e.target.value);
  }

  function addNewTask(e) {
    e.preventDefault();
    if (newInput.trim() === "") {
      setNewInput("");
      return;
    }
    const exists = todoList.some((todo) => todo.description === newInput);

    if (exists) {
      alert("Task already Exists");
    } else {
      setTodoList((prev) => {
        return [...todoList, { description: newInput, completed: false }];
      });
      setNewInput("");
    }
  }

  return (
    <form className="submit-input" onSubmit={addNewTask}>
      <input
        value={newInput}
        onChange={storeInput}
        placeholder="Enter Task Here"
      />
      <button className="submit-btn">Add Task</button>
    </form>
  );
}

function List({ todoList, setTodoList, setNewInput }) {
  function handleDeleteTask(todoToRemove) {
    setTodoList((prev) => prev.filter((todo) => todo !== todoToRemove));
  }

  function handleCompletedTask(todoToCheck) {
    setTodoList((prev) =>
      prev.map((todo) =>
        todo === todoToCheck ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function handleEditTask(todoToEdit) {
    todoList.map(
      (todo) => todo === todoToEdit && setNewInput(todo.description),
      setTodoList((prev) => prev.filter((todo) => todo !== todoToEdit))
    );
  }

  return (
    <div className="list-container">
      <ul>
        {todoList.map((todo, index) => {
          return (
            <div key={todo.description}>
              <li>
                <span>
                  <i
                    className={`icon ${
                      todo.completed
                        ? "fa-solid fa-circle-check"
                        : "fa-regular fa-circle"
                    }`}
                    onClick={() => handleCompletedTask(todo)}
                  ></i>
                  <p className={`${todo.completed && "completed"}`}>
                    {todo.description}
                  </p>
                </span>
                <span>
                  <i
                    className="icon pen-icon fa-solid fa-pen-fancy"
                    onClick={() => handleEditTask(todo)}
                  ></i>
                  <i
                    className="icon trash-icon fa-regular fa-trash-can"
                    onClick={() => handleDeleteTask(todo)}
                  ></i>
                </span>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
