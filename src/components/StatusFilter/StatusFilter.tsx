import { Component, useState } from "react";
import { ITodo } from "../../types/todo";

export const StatusFilter = (props: any) => {
  const [status, setStatus] = useState(props.status);
  // state={
  //   status: this.props.status
  // }
  //   const {status} = props
  return (
    <div className="btn-group">
      <button type="button"
              onClick={() => {
                props.statusClick("all");
              }}
              className={`btn ${status === "all" ? " btn-info" : " btn-outline-secondary"}`}
      >All
      </button>
      <button type="button"
              onClick={() => {
                props.statusClick("active");
              }}
              className={`btn ${status === "active" ? " btn-info" : " btn-outline-secondary"}`}
      >Active
      </button>
      <button type="button"
              onClick={() => {
                props.statusClick("done");
              }}
              className={`btn ${status === "done" ? " btn-info" : " btn-outline-secondary"}`}
      >Done
      </button>
    </div>
  );
};

