import { Component } from "react";
import styles from "./Header.module.css";

export const Header = (props: any) => {
  return (
    <div className={styles.header}>
      <h1>Todo list</h1>
      <h2 className={styles.count}>{props.todo} more to do, {props.done} done</h2>
    </div>
  );
};
