export default function App() {
  return (
    <div className="container">
      <Header />
      <SubmitInput />
      <TodoList />
    </div>
  );
}

function Header() {
  return (
    <div>
      <i className="logo fa-solid fa-dice-d20"></i>
      <h1>Todo List App</h1>
      <p>Organize Your Day, One Task at a Time</p>
    </div>
  );
}

function SubmitInput() {
  return (
    <div className="submit-input">
      <input placeholder="Enter Task Here" />
      <button className="submit-btn">Add Task</button>
    </div>
  );
}

function TodoList() {
  return (
    <div className="list-container">
      <ul>
        <li>
          <div>
            <span>
              <i className="icon fa-regular fa-circle"></i>
              <p>Go to the Gym</p>
            </span>
            <span>
              <i className="icon pen-icon fa-solid fa-pen-fancy"></i>
              <i className="icon trash-icon fa-regular fa-trash-can"></i>
            </span>
          </div>
        </li>

        <li>
          <div>
            <span>
              <i className="icon fa-regular fa-circle"></i>
              <p>Code Crunch</p>
            </span>
            <span>
              <i className="icon pen-icon fa-solid fa-pen-fancy"></i>
              <i className="icon trash-icon fa-regular fa-trash-can"></i>
            </span>
          </div>
        </li>

        <li>
          <div>
            <span>
              <i className="icon fa-regular fa-circle"></i>
              <p>Visit Nkechi and Amaka</p>
            </span>
            <span>
              <i className="icon pen-icon fa-solid fa-pen-fancy"></i>
              <i className="icon trash-icon fa-regular fa-trash-can"></i>
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
}
