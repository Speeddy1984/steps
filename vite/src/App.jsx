import './App.css'
import { useState } from 'react';
import Form from './components/Steps/Form';
import Table from './components/Steps/Table'

function App() {
  const [workouts, setWorkouts] = useState([]);

  const addWorkout = (date, distance) => {
    setWorkouts(prevWorkouts => {
     const existingWorkout = prevWorkouts.find(workout => workout.date === date);
     if (existingWorkout) {
        return prevWorkouts.map(workout =>
         workout.date === date ? { ...workout, distance: workout.distance + distance } : workout
        );
     } else {
        return [...prevWorkouts, { date, distance }].sort((a, b) => new Date(b.date) - new Date(a.date));
     }
    });

  };

const deleteWorkout = (date) => {
    setWorkouts(prevWorkouts => prevWorkouts.filter(workout => workout.date !== date));
};

const editWorkout = (date, newDistance) => {
    setWorkouts(prevWorkouts => prevWorkouts.map(workout =>
     workout.date === date ? { ...workout, distance: newDistance } : workout
    ));
};
return (
  <div>
   <Form addWorkout={addWorkout} />
   <Table workouts={workouts} deleteWorkout={deleteWorkout} editWorkout={editWorkout} />
  </div>
);
}

export default App
