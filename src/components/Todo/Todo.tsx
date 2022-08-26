import {Component} from 'react';
import {ITodo} from '../../types/todo';
import styles from './Todo.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons/faTrash";
import {faExclamation} from "@fortawesome/free-solid-svg-icons/faExclamation";

export class Todo extends Component<any, any> {
    render() {
        const {text, deleteItem, toggleImportant, toggleDone, important, done} = this.props

        let labelClassname = ''
        if (done){
            labelClassname += ' ' + styles.done
        }
        if(important){
            labelClassname += ' ' + styles.important
        }
        return (
            <div className={styles.todo}>
                <p className={styles.todoLabel + labelClassname }
                   onClick={toggleDone}
                >{text}</p>
                <div className="buttons">
                    <button type="button"
                            className="btn btn-outline-success btn-sm"
                            onClick={toggleImportant}
                    >
                        <FontAwesomeIcon icon={faExclamation}/>
                    </button>
                    <button type="button"
                            className="btn btn-outline-danger btn-sm"
                            onClick={deleteItem}
                    >
                        <FontAwesomeIcon icon={faTrash}/>
                    </button>
                </div>
            </div>
        );
    }
}
