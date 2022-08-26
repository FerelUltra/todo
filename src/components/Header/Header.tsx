import {Component} from 'react';
import styles from './Header.module.css'
export class Header extends Component<any, any> {

    render() {
        return (
            <div className={styles.header}>
                <h1>Todo list</h1>
                <h2 className={styles.count}>{this.props.todo} more to do, {this.props.done} done</h2>
            </div>
        )
    }


}
