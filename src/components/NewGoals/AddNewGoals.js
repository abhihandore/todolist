import React from 'react';
import NewGoalForm from './NewGoalForm';


const AddNewGoals = (props) => {

    const onFormSubmitHandler = (submitedData) => {
        props.onGettingFormData(submitedData);
    }

    return <NewGoalForm onFormSubmit={onFormSubmitHandler} />
}

export default AddNewGoals;