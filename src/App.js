import React, {useState} from 'react';
import './App.css';
import AddNewGoals from './components/NewGoals/AddNewGoals';
import GoalsList from './components/GoalsList/GoalsList';

const DEFAULT_GOALS = [
  {id: Math.random().toString(), title: 'Wake up morning at 6.00 am', isCompleted : false},
  {id: Math.random().toString(), title: 'Do breakfast bt 8.00 am', isCompleted : false},
];



const App = () => {
  const [goals, setGoals] = useState(DEFAULT_GOALS);

  const onGettingFormDataHandler = (data) => {
    setGoals((prevData) => {
      return [data, ...prevData];
    });
    
  }
  console.log(goals);

  return (
    <React.Fragment>
      <AddNewGoals onGettingFormData={onGettingFormDataHandler} />
      <GoalsList goalsList={goals} /> 
    </React.Fragment>
  );
}
export default App;
