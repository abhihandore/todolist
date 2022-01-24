import React, {useState} from 'react';
import './App.css';
import AddNewGoals from './components/NewGoals/AddNewGoals';
import GoalsList from './components/GoalsList/GoalsList';

const DEFAULT_GOALS = [
  {id: Math.random().toString(), title: 'Wake up morning at 6.00 am'},
  {id: Math.random().toString(), title: 'Do breakfast bt 8.00 am'},
];



const App = () => {
  const [goals, setGoals] = useState(DEFAULT_GOALS);

  const onGettingFormDataHandler = (data) => {
    setGoals((prevData) => {
      return [data, ...prevData];
    });
  }

  const deleteItemHandler = goalId => {
    setGoals((prevData) => {
      return prevData.filter( item => {
        return item.id !== goalId;
      })
    })
  }

  let content = <p styles={{textAlign: 'center'}}>No goals found. Maybe add one?</p>;

  if(goals.length){
    content = (
      <GoalsList goalsList={goals} onDelteItem={deleteItemHandler} /> 
    );
  }


  return (
    <React.Fragment>
      <section id="goal-form" >
        <AddNewGoals onGettingFormData={onGettingFormDataHandler} />
      </section>
      <section id="goals">
        {content}
      </section>
    </React.Fragment>
  );
}
export default App;
