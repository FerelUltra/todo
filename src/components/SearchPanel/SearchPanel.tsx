import { Component } from "react";
import { ITodo } from "../../types/todo";

export const SearchPanel = (props: any) => {

    return (
      <input type="text"
             value={props.search}
             onChange={(e) => {
        props.onSearchChange(e);
      }} />
    );

}
