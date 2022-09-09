import "./App.css";

import { Component, useState } from "react";

import { IAppState, IStatus } from "./types/todo";
import { List } from "./components/List/List";
import { Header } from "./components/Header/Header";
import { StatusFilter } from "./components/StatusFilter/StatusFilter";
import { SearchPanel } from "./components/SearchPanel/SearchPanel";
import { AddItem } from "./components/AddItem/AddItem";
import { Todo } from "./components/Todo/Todo";


const App = () => {
  let maxId = 0;
  const createTodo = (text: string) => {
    return {
      text,
      important: false,
      done: false,
      id: maxId++
    };
  };
  const [todos, setTodos] = useState([createTodo("drink coffee"), createTodo("drink tea")]);
  const [status, setStatus] = useState("all");
  const [search, setSearch] = useState("")
  // state: IAppState = {
  //   todos: [
  //     createTodo("drink coffee"),
  //     createTodo("drink tea")
  //   ],
  //   status: "all",
  //   search: ""
  // };

  const toggleProperty = (arr: any[], id: number, propName: string) => {
    const idx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[idx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };
    const newArr = [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
    console.log(newArr);

    return newArr;
  };
  const deleteItem = (id: number) => {
    setTodos(prevState => {
      const idx = prevState.findIndex((el) => el.id === id);
      const newArr = [...prevState.slice(0, idx), ...todos.slice(idx + 1)];
      return newArr
    })
    // this.setState(({ todos }) => {
    //
    //   console.log(newArr);
    //   return {
    //     todos: newArr
    //   };
    // });
  };
  const addItem = (text: string) => {
    const newItem = createTodo(text);
    setTodos(prevState => {
      return [...prevState, newItem]
    })
    // this.setState(({ todos }) => {
    //   return {
    //     todos: [...todos, newItem]
    //   };
    // });
    // console.log(this.state.todos);
  };
  const toggleImportant = (id: number) => {
    setTodos(prevState => {
      return toggleProperty(prevState, id, "important")
    })
    // this.setState(({ todos }) => {
    //   return {
    //     todos: this.toggleProperty(todos, id, "important")
    //   };
    // });
  };
  const toggleDone = (id: number) => {
    setTodos(prevState => {
      return toggleProperty(prevState, id, "done")
    })
    // this.setState(({ todos }) => {
    //   return {
    //     todos: this.toggleProperty(todos, id, "done")
    //   };
    // });
  };
  const statusClick = (status1: IStatus) => {
    setStatus(status1)
    // this.setState(({ status }) => {
    //   return {
    //     status: status1
    //   };
    // });
  };
  const onSearchChange = (e: any) => {
    setSearch(e.target.value)
    // this.setState({
    //   search: e.target.value
    // });
  };

  {
    // const { todos, status, search } = this.state;
    const done = todos.filter((el) => el.done).length;
    const todo = todos.length - done;
    return (
      <div className="container">
        <div className="app">
          <Header todo={todo} done={done} />
          <div>
            <SearchPanel search={search} onSearchChange={onSearchChange} />
            <StatusFilter statusClick={statusClick} status={status} />
          </div>
          <ul className="list-group todoList">
            {todos.filter(el => {
              if (status === "all") {
                return true;
              }
              if (status === "active") {
                return !el.done;
              }
              if (status === "done") {
                return el.done;
              }
            }).filter(el => el.text.includes(search)).map(todo => {
              const { id, text, important, done } = todo;
              return (
                <li key={id}>
                  <Todo text={text} important={important} done={done} deleteItem={() => deleteItem(id)}
                        toggleImportant={() => toggleImportant(id)}
                        toggleDone={() => toggleDone(id)} />
                </li>
              );
            })}
          </ul>
          {/*<List todos={todos} deleteItem={this.deleteItem}*/}
          {/*toggleImportant={this.toggleImportant} toggleDone={this.toggleDone}/>*/}
          <AddItem onItemAdded={addItem} />
        </div>
      </div>
    );
  }
};

export default App;
