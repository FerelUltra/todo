import { Component, useState } from "react";
import styles from "./AddItem.module.css";

export const AddItem = (props: any) => {
  const [label, setLabel] = useState("");
  // state = {
  //     label: ''
  // }
  const onLabelChange = (e: any) => {
    setLabel(e.target.value);
    // this.setState({
    //     label: e.target.value
    // })
  };
  const onSubmit = (e: any) => {
    e.preventDefault();
    if (label) {
      props.onItemAdded(label);
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
      <button className="btn btn-outline-secondary"

      >Add item
      </button>
    </form>
  );
};

