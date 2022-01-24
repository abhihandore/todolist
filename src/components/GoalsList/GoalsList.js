import React from 'react';
import GoalItem from './GoalItem';
import styles from './GoalsList.module.css';

const GoalList = (props) => {
    return  (
        <ul className={`${styles['goal-list']}`} >{
            props.goalsList.map((goal) =>{
                return (
                    <GoalItem 
                    title={goal.title} 
                    key={goal.id} 
                    id={goal.id}
                    onDelete={props.onDelteItem}
                    />
                );
            })
        }</ul>
    )
}

export default GoalList;