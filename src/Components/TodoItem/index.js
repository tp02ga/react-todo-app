import React from "react";

const TodoItem = (props) => {
  // const todoItemData = props.todoItemData;
  const { todoItemData, emitTodoItemDataUpdate, emitTodoItemDataDelete } =
    props;

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
          checked={todoItemData.isDone}
        />
        {todoItemData.isDone ? (
          <label
            style={
              todoItemData.isDone ? { textDecoration: "line-through" } : {}
            }
          >
            {todoItemData.itemName}
          </label>
        ) : (
          <input
            type="text"
            value={todoItemData.itemName}
            placeholder="New todo item here"
            onChange={(e) => {
              todoItemData.itemName = e.target.value;
              emitTodoItemDataUpdate(todoItemData);
            }}
          />
        )}
        <span
          style={{ marginLeft: "1em", cursor: "pointer" }}
          onClick={(e) => emitTodoItemDataDelete(todoItemData)}
        >
          ➖
        </span>
      </>
    </div>
  );
};

export default TodoItem;
