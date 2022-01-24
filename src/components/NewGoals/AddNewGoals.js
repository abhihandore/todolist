import React from 'react';
import NewGoalForm from './NewGoalForm';
import Card from '../UI/Card';


const AddNewGoals = (props) => {

    const onFormSubmitHandler = (submitedData) => {
        props.onGettingFormData(submitedData);
    }

    return (
        <Card>
            <NewGoalForm onFormSubmit={onFormSubmitHandler} />
        </Card>
    )
}

export default AddNewGoals;