import {Component, MouseEventHandler} from 'react';
import {ITodo} from '../../types/todo';
import {Todo} from '../Todo/Todo';
import './List.module.css'

export class List extends Component<any, any> {
    elements = this.props.todos.map((item: ITodo) => {
        const {id, text, important, done} = item;
        return (
            <li key={id} className="list-group-item">
                <Todo text={text} important={important} done={done} deleteItem={() => this.props.deleteItem(id)}
                      toggleImportant={() => this.props.toggleImportant(id)}
                      toggleDone={() => this.props.toggleDone(id)}/>
            </li>
        );
    });

    render() {
        return (
            <ul className='list-group todoLIst'>
                {this.elements}
            </ul>
        );
    }
}
