import {Component} from "react";
import styles from './AddItem.module.css'

export class AddItem extends Component<any, any> {

    state = {
        label: ''
    }
    onLabelChange = (e: any) => {

        this.setState({
            label: e.target.value
        })
    }
    onSubmit = (e: any) =>{
        e.preventDefault()
        this.props.onItemAdded(this.state.label)
        this.setState({
            label: ''
        })
    }
    render() {
        return (
            <form className={styles.addItem}
                    onSubmit={this.onSubmit}
            >
                <input type="text"
                       className="form-control"
                       onChange={this.onLabelChange}
                       value={this.state.label}
                       placeholder="what need to be done?"/>
                <button className="btn btn-outline-secondary"

                >Add item
                </button>
            </form>
        )
    }
}
