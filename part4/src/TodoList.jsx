import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function TodoList() {
  let [todos, setTodos] = useState([
    { task: "sample-task", id: uuidv4(), isDone: false },
  ]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    // console.log("We have to add new task in todo");
    setTodos((prevTodos) => {
      return [...prevTodos, { task: newTodo, id: uuidv4(), isDone: false }];
    });
    setNewTodo(""); //task print kely vr add task karto teve reset honya sathi
  };

  let updateTodoValue = (event) => {
    // console.log(event.target); //print input - add a task
    //  console.log(event.target.value); //input madhal value delte karne , add task madhe a type kela print a hota
    setNewTodo(event.target.value); //re-render
  };

  let deleteTodo = (id) => {
    // console.log(id);
    setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
  };

  // upadating all element in arr
  // let upperCaseAll = () => {
  //   setTodos((prevTodos) =>
  //     prevTodos.map((todo) => {
  //       // console.log(todo);
  //       return {
  //         ...todo,
  //         task: todo.task.toUpperCase(),
  //       };
  //     })
  //   );
  // };
  // }

  //upadating one element in arr
  // let upperCaseOne = (id) => {
  //   // console.log("one");
  //   setTodos((prevTodos) =>
  //     prevTodos.map((todo) => {
  //       if (todo.id == id) {
  //         return {
  //           ...todo,
  //           task: todo.task.toUpperCase(),
  //         };
  //       } else {
  //         return todo;
  //       }
  //     })
  //   );
  // };

  // marks as all Done
  let markAllDone = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return {
          ...todo,
          isDone: true,
        };
      })
    );
  };

  // marks As Done
  let markAsDone = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            isDone: true, // in console - componet madhe jaun check karu shakt ki isDone true ahe ka? marks as donevr click kela tr true hota
          };
        } else {
          return todo;
        }
      })
    );
  };

  return (
    <div>
      <input
        placeholder="add a task"
        value={newTodo}
        onChange={updateTodoValue}
      ></input>
      <br />
      {/* add a task karne print hota hai - We have to add new task in todo */}
      <button onClick={addNewTask}>Add Task</button>
      <br />
      <br />
      <br />

      <hr />
      <h4> Tasks Todo</h4>
      <ul>
        {todos.map((todo) => {
          //return <li>{todo}</li>; // return krly vr print sample task
          return (
            <li key={todo.id}>
              <span
                style={
                  todo.isDone ? { textDecorationLine: "line-through" } : {}
                }
              >
                {todo.task}
              </span>{" "}
              &nbsp; &nbsp; &nbsp; &nbsp;
              <button onClick={() => deleteTodo(todo.id)}>delete</button> &nbsp;
              &nbsp; &nbsp; &nbsp;
              {/* <button onClick={() => upperCaseOne(todo.id)}>
                UpperCase One
              </button> */}
              <button onClick={() => markAsDone(todo.id)}>Mark As Done</button>
            </li>
          ); //waring remove hote console madhun //task delete karnya sathi span madhe use kela n btn use kela
        })}
      </ul>

      {/* <button onClick={upperCaseAll}>UpperCase All</button> */}
      <button onClick={markAllDone}>Mark All Done </button>
    </div>
  );
}

export default TodoList;
