import styles from './steps.module.css'
const Table = ({ workouts, deleteWorkout, editWorkout }) => {
    const handleDelete = (date) => {
        deleteWorkout(date);
    };
    
    const handleEdit = (date) => {
        const newDistance = prompt('Введите новое расстояние, км:');
        if (newDistance) {
         editWorkout(date, parseFloat(newDistance));
        }
    };
    
    return (
        <table>
         <thead>
            <tr>
             <th>Дата (ДД.ММ.ГГ)</th>
             <th>Пройдено, км</th>
             <th>Действия</th>
            </tr>
         </thead>
         <tbody>
            {workouts.map((workout) => (
             <tr key={workout.date}>
                <td>{workout.date}</td>
                <td>{workout.distance}</td>
                <td>
                 <button onClick={() => handleEdit(workout.date)}>✎</button>
                 <button onClick={() => handleDelete(workout.date)}>✘</button>
                </td>
             </tr>
            ))}
         </tbody>
        </table>
    );
    };
    
    export default Table;