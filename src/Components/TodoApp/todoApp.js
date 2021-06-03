import Footer from "../Footer/footer";
import Header from "../Header/header";

const TodoApp = () => {
  const todoItems = [
    {
      id: 1,
      itemName: "Get the milk!",
      isDone: false,
    },
    {
      id: 2,
      itemName: "Pick up the kids",
      isDone: false,
    },
    {
      id: 3,
      itemName: "Go to work",
      isDone: true,
    },
  ];

  return (
    <div>
      <Header />
      <div style={{ marginBottom: "3rem" }}>
        <h1>Todo List</h1>
        {todoItems.map((todoItem) => {
          return (
            <div key={todoItem.id}>
              {
                <label
                  style={
                    todoItem.isDone ? { textDecoration: "line-through" } : {}
                  }
                >
                  {todoItem.itemName}
                </label>
              }
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default TodoApp;
