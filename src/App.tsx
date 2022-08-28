import './App.css'

import { Component } from 'react';

import {IAppState} from './types/todo';
import {List} from './components/List/List';
import {Header} from './components/Header/Header';
import {StatusFilter} from './components/StatusFilter/StatusFilter';
import {SearchPanel} from './components/SearchPanel/SearchPanel';
import {AddItem} from "./components/AddItem/AddItem";
import {Todo} from "./components/Todo/Todo";


class App extends Component<any, IAppState> {
    maxId = 0
    createTodo = (text: string) =>{
        return {
            text,
            important: false,
            done: false,
            id: this.maxId++
        }
    }
    state: IAppState = {
        todos: [
            this.createTodo('drink coffee'),
            this.createTodo('drink tea')
        ]
    }

    toggleProperty = (arr: any[], id: number, propName: string) =>{
        const idx = arr.findIndex((el) => el.id === id)
        const oldItem = arr[idx]
        const newItem = {...oldItem, [propName]: !oldItem[propName]}
        const newArr = [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)]
        console.log(newArr)

        return newArr
    }
    deleteItem = (id: number) => {
        this.setState(({todos}) => {
            const idx = todos.findIndex((el) => el.id === id)
            const newArr = [...todos.slice(0, idx), ...todos.slice(idx + 1)]
            console.log(newArr)
            return {
                todos: newArr
            }
        })
    }
    addItem = (text: string) =>{
        const newItem = this.createTodo(text)
        this.setState(({todos})=>{
            return {
                todos: [...todos, newItem]
            }
        })
        console.log(this.state.todos)
    }
    toggleImportant = (id: number)=>{
        this.setState(({todos})=>{
            return {
                todos: this.toggleProperty(todos, id, 'important')
            }
        })
    }
    toggleDone = (id: number)=>{
        this.setState(({todos})=>{
            return {
                todos: this.toggleProperty(todos, id, 'done')
            }
        })
    }
    render() {
        const {todos} = this.state
        const done = todos.filter((el)=> el.done).length
        const todo = todos.length - done
        return (
            <div className="container">
                <div className="app">
                    <Header todo={todo} done={done}/>
                    <div>
                        <SearchPanel/>
                        <StatusFilter/>
                    </div>
                    <ul className='list-group todoLIst'>
                        {this.state.todos.map(todo=>{
                            const {id, text, important, done} = todo;
                            return(
                                <li key={id}>
                                    <Todo text={text} important={important} done={done} deleteItem={() => this.deleteItem(id)}
                                              toggleImportant={() => this.toggleImportant(id)}
                                              toggleDone={() => this.toggleDone(id)}/>
                                </li>
                            )
                        })}
                    </ul>
                    {/*<List todos={todos} deleteItem={this.deleteItem}*/}
                    {/*toggleImportant={this.toggleImportant} toggleDone={this.toggleDone}/>*/}
                    <AddItem onItemAdded={this.addItem}/>
                </div>
            </div>
        );
    }
}

export default App
