import React, { useEffect, useState } from "react";
import TodoItem from "../TodoItem";

const Dashboard = () => {
  const [allActiveItems, setAllActiveItems] = useState([]);

  useEffect(() => {
    fetch("/api/todoItems/active", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((allActiveItems) => {
        setAllActiveItems(allActiveItems);
      });
  }, []);

  return (
    <div>
      <h1>Active Todo Items</h1>
      {allActiveItems
        .filter((item) => !item.isDone)
        .map((data) => {
          return (
            <TodoItem
              todoItemData={data}
              key={data.id}
              todoItems={allActiveItems}
              setTodoItems={setAllActiveItems}
            />
          );
        })}
    </div>
  );
};

export default Dashboard;
