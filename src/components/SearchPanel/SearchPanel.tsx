import { Component } from "react";
import { ITodo } from "../../types/todo";

export class SearchPanel extends Component<any> {

  render() {
    return (
      <input type="text"
             value={this.props.search}
             onChange={(e) => {
        this.props.onSearchChange(e);
      }} />
    );
  }
}
