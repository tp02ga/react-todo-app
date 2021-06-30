import { useEffect, useState } from "react";
import Footer from "../Footer/footer";
import Header from "../Header/header";
import TodoItem from "../TodoItem";

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

  function handleTodoItemDataDelete(data) {
    fetch("/api/todoItems", {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((todoItems) => setTodoItems(todoItems));
    // const todoItemsCopy = [...todoItems];

    // const i = todoItemsCopy.findIndex((todoItem) => todoItem.id === data.id);
    // console.log("index = ", i);
    // todoItemsCopy.splice(i, 1);

    // setTodoItems(todoItemsCopy);
  }

  function handleTodoItemDataUpdate(data, shouldSave) {
    if (!shouldSave) {
      const todoItemsCopy = [...todoItems];

      const i = todoItemsCopy.findIndex((todoItem) => todoItem.id === data.id);
      console.log("index = ", i);
      todoItemsCopy[i] = data;

      setTodoItems(todoItemsCopy);
    } else {
      fetch("/api/todoItems", {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((todoItems) => setTodoItems(todoItems));
    }
  }
  function handleTodoItemDataAdd() {
    const data = {
      itemName: "Get the milk",
      isDone: false,
    };
    fetch("/api/todoItems", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((todoItems) => setTodoItems(todoItems));
  }
  return (
    <div>
      <Header />
      <div style={{ marginBottom: "3rem" }}>
        <h1>
          Todo List{" "}
          <span onClick={handleTodoItemDataAdd} style={{ cursor: "pointer" }}>
            +
          </span>
        </h1>
        {todoItems.map((data) => {
          return (
            <TodoItem
              todoItemData={data}
              key={data.id}
              emitTodoItemDataUpdate={handleTodoItemDataUpdate}
              emitTodoItemDataDelete={handleTodoItemDataDelete}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default TodoApp;
