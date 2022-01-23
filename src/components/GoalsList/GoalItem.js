import React,{ useState } from 'react';

const GoalItem = (props) => {

    const [isComplete,setIsComplete] = useState(false);

    const itemClickHandler = (e) => {
        setIsComplete(true);
    }

    return (
        <li className={isComplete && 'completed' }>
            <div className="item-wrapper">
                <span>{props.title}</span>
            </div>
            <button onClick={itemClickHandler} className="btn btn-remove">Completed</button>
        </li>
    )
}

export default GoalItem;