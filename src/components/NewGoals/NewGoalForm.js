import React,{useState} from 'react';
import Input from '../UI/Input';
import Button from '../UI/Button';

const NewGoalForm = (props) => {

    const [formData,setFormData] = useState(
        {title : ''}
    );
    const [isValid,setIsValid] = useState(true);

    const formSubmitHandler = (event) => {
        event.preventDefault();
        if(!formData.title.trim().length){
            setIsValid(false);
            return;   
        }
        setIsValid(true);
        props.onFormSubmit({
            ...formData,
            id: Math.random().toString()
        });
        setFormData({
            title : ''
        })
    }
    const inputChangeHandler = (event) => {
        if(event.target.value.trim().length){
            setIsValid(true);
        }
        setFormData( (prevData) => {
            return {...prevData, title: event.target.value};
        });
    }
    return (
        <form onSubmit={formSubmitHandler} >
            <div className="fieldset">
                <Input label="Enter your Next Goal" type="text" isValid={isValid} name="next-goal" value={formData.title} onChange={inputChangeHandler} id="NewGoal" />
                <div className="action-buttons">
                    <Button type="submit">Add New Goal</Button>
                </div>
            </div>
        </form>
    )
}

export default NewGoalForm;