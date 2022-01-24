import React,{ useState } from 'react';
import styles from './GoalItem.module.css';

const GoalItem = (props) => {

    const [isComplete,setIsComplete] = useState(false);

    const deleteHandler = (e) => {
        e.preventDefault();
        props.onDelete(props.id);
        setIsComplete(true);
    }

    return (
        <li className={`${styles['goal-item']} ${isComplete && 'completed'}`} >
            <div className="item-wrapper">
                <span>{props.title}</span>
            </div>
            <button onClick={deleteHandler} className="btn btn-remove">Completed ?</button>
        </li>
    )
}

export default GoalItem;