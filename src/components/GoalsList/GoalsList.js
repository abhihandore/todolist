import React from 'react';
import GoalItem from './GoalItem';

const GoalList = (props) => {
    return  (
        <ul>{
            props.goalsList.map((goal) =>{
                return <GoalItem title={goal.title} isCompleted={goal.isCompleted} key={goal.id} />;
            })
        }</ul>
    )
}

export default GoalList;