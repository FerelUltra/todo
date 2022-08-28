import { Component } from 'react';
import { ITodo } from '../../types/todo';

export class StatusFilter extends Component<any> {
  state={
    status: this.props.status
  }
  render() {
    const {status} = this.props
    return (
      <div className='btn-group'>
        <button type='button'
                onClick={()=>{
                  this.props.statusClick('all')
                }}
                className={`btn ${status === 'all' ? ' btn-info' : ' btn-outline-secondary'}`}
        >All
        </button>
        <button type='button'
                onClick={()=>{
                  this.props.statusClick('active')
                }}
                className={`btn ${status === 'active' ? ' btn-info' : ' btn-outline-secondary'}`}
        >Active
        </button>
        <button type='button'
                onClick={()=>{
                  this.props.statusClick('done')
                }}
                className={`btn ${status === 'done' ? ' btn-info' : ' btn-outline-secondary'}`}
        >Done
        </button>
      </div>
    );
  }
}
