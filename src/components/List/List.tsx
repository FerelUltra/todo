import {Component, MouseEventHandler} from 'react';
import {ITodo} from '../../types/todo';
import {Todo} from '../Todo/Todo';
import './List.module.css'

export const List = (props: any) => {
    let elements = props.todos.map((item: ITodo) => {
        const {id, text, important, done} = item;
        return (
            <li key={id} className="list-group-item">
                <Todo text={text} important={important} done={done} deleteItem={() => props.deleteItem(id)}
                      toggleImportant={() => props.toggleImportant(id)}
                      toggleDone={() => props.toggleDone(id)}/>
            </li>
        );
    });


        return (
            <ul className='list-group todoLIst'>
                {elements}
            </ul>
        );

}
