import React from "react";
import {
  handleTodoItemDataUpdate,
  handleTodoItemDataDelete,
} from "../../Services/todoItemService";
import PropTypes from "prop-types";

const TodoItem = (props) => {
  // const todoItemData = props.todoItemData;
  const { todoItemData, todoItems, setTodoItems } = props;

  console.log("TodoItem updated with data,", todoItemData);

  return (
    <div>
      <>
        <input
          type="checkbox"
          onChange={(e) => {
            todoItemData.isDone = !todoItemData.isDone;
            handleTodoItemDataUpdate(
              todoItemData,
              todoItems,
              setTodoItems,
              true
            );
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
              handleTodoItemDataUpdate(
                todoItemData,
                todoItems,
                setTodoItems,
                false
              );
            }}
            onBlur={(e) => {
              todoItemData.itemName = e.target.value;
              handleTodoItemDataUpdate(
                todoItemData,
                todoItems,
                setTodoItems,
                true
              );
            }}
          />
        )}
        <span
          style={{ marginLeft: "1em", cursor: "pointer" }}
          onClick={(e) => handleTodoItemDataDelete(todoItemData, setTodoItems)}
        >
          ➖
        </span>
      </>
    </div>
  );
};

TodoItem.propTypes = {
  todoItemData: PropTypes.any.isRequired,
  todoItems: PropTypes.array.isRequired,
  setTodoItems: PropTypes.func.isRequired,
};
export default TodoItem;
