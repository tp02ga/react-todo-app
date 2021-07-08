function handleTodoItemDataDelete(data, setTodoItems) {
  fetch("/api/todoItems", {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((todoItems) => setTodoItems(todoItems));
}

function handleTodoItemDataUpdate(data, todoItems, setTodoItems, shouldSave) {
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
function handleTodoItemDataAdd(setTodoItems) {
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

export {
  handleTodoItemDataAdd,
  handleTodoItemDataDelete,
  handleTodoItemDataUpdate,
};
