import { useEffect, useState } from "react";
import Footer from "../Footer/footer";
import Header from "../Header/header";
import TodoItem from "../TodoItem";
import { handleTodoItemDataAdd } from "../../Services/todoItemService";
const TodoApp = () => {
  const [todoItems, setTodoItems] = useState([]);

  useEffect(() => {
    // fetch the data from DB
    fetch("/api/todoItems")
      .then((response) => response.json())
      .then((data) => {
        setTodoItems(data);
      });
  }, []);

  return (
    <div>
      <Header />
      <div style={{ marginBottom: "3rem" }}>
        <h1>
          Todo List{" "}
          <span
            onClick={() => handleTodoItemDataAdd(setTodoItems)}
            style={{ cursor: "pointer" }}
          >
            +
          </span>
        </h1>
        {todoItems.map((data) => {
          return (
            <TodoItem
              todoItemData={data}
              key={data.id}
              todoItems={todoItems}
              setTodoItems={setTodoItems}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default TodoApp;
