import React,{useState} from 'react';
import Input from '../UI/Input';
import Button from '../UI/Button';
import './NewGoalForm.css';

const NewGoalForm = (props) => {

    const [formData,setFormData] = useState({
        title : '',
        isCompleted : false
    });

    const [isValid,setIsValid] = useState(true);

    const formSubmitHandler = (event) => {
        event.preventDefault();
        if(formData.title.trim().length){
            setIsValid(true);
            props.onFormSubmit({
                ...formData,
                id: Math.random().toString()
            });
            setFormData({
                title : '',
                isCompleted : false
            })
        }else{
            setIsValid(false);
        }
        
    }
    const inputChangeHandler = (event) => {
        setIsValid(true);
        setFormData( (prevData) => {
            return {...prevData, title: event.target.value};
        });
    }
    return (<form onSubmit={formSubmitHandler} >
        <div className="fieldset">
            <Input label="Enter your Next Goal" type="text" isValid={isValid} name="next-goal" value={formData.title} onChange={inputChangeHandler} id="NewGoal" />
            <div className="action-buttons">
                <Button type="submit">Add New Goal</Button>
            </div>
        </div>
    </form>)
}

export default NewGoalForm;