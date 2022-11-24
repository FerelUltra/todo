import { Component, useState } from "react";
import styles from "./AddItem.module.css";

export const AddItem = (props: any) => {
  const [label, setLabel] = useState("");
  const [seconds, setSeconds] = useState("");
  const onLabelChange = (e: any) => {
    setLabel(e.target.value);
  };
  const onSecondsChange = (e: any) => {
    setSeconds(e.target.value);
  };
  const onSubmit = (e: any) => {
    e.preventDefault();
    if (label && seconds) {
      props.onItemAdded(label, Number(seconds));
      setLabel("");
      // this.setState({
      //     label: ''
      // })
    }
  };

  return (
    <form className={styles.addItem}
          onSubmit={onSubmit}
    >
      <input type="text"
             className="form-control"
             onChange={onLabelChange}
             value={label}
             placeholder="what need to be done?" />
      <input type="number"
             className="form-control"
             onChange={onSecondsChange}
             value={seconds}
             placeholder="seconds"/>
      <button className="btn btn-outline-secondary"

      >Add item
      </button>
    </form>
  );
};

