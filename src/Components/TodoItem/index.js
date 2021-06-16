import React from "react";

const TodoItem = (props) => {
  // const todoItemData = props.todoItemData;
  const { todoItemData, emitTodoItemDataUpdate } = props;

  console.log("TodoItem updated with data,", todoItemData);

  return (
    <div>
      <>
        <input
          type="checkbox"
          onChange={(e) => {
            todoItemData.isDone = !todoItemData.isDone;
            emitTodoItemDataUpdate(todoItemData);
          }}
          value={todoItemData.isDone}
        />
        <label
          style={todoItemData.isDone ? { textDecoration: "line-through" } : {}}
        >
          {todoItemData.itemName}
        </label>
      </>
    </div>
  );
};

export default TodoItem;
