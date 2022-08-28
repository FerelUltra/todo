import { Component, PureComponent } from "react";
import { ITodo } from "../../types/todo";
import styles from "./Todo.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";
import { faExclamation } from "@fortawesome/free-solid-svg-icons/faExclamation";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import * as timeago from "timeago.js";

export class Todo extends PureComponent<any, any> {
  state = {
    timer: 0,
  };
  componentDidMount(){
    const newIntervalId = setInterval(() => {
      this.setState((prevState: { timer: number; }) => {
        return {
          ...prevState,
          timer: prevState.timer + 1,
        };
      });
    }, 1000);

    this.setState((prevState: any) => {
      return {
        ...prevState,
        intervalId: newIntervalId,
      };
    });
  }

  render() {
    const { text, deleteItem, toggleImportant, toggleDone, important, done } = this.props;
    const date = Date.now()
    let labelClassname = "";
    if (done) {
      labelClassname += " " + styles.done;
    }
    if (important) {
      labelClassname += " " + styles.important;
    }
    return (
      <div className={styles.todo}>
        <p className={styles.todoLabel + labelClassname}
           onClick={toggleDone}
        >{text}</p>
        <div className="buttons">
          {timeago.format(date - this.state.timer*1000)}
          <button type="button"
                  className="btn btn-outline-success btn-sm"
                  onClick={toggleImportant}
          >
            <FontAwesomeIcon icon={faExclamation} />
          </button>
          <button type="button"
                  className="btn btn-outline-danger btn-sm"
                  onClick={deleteItem}
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </div>
    );
  }
}
