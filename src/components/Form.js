import { addTask } from "../redux/action";
import { useDispatch } from "react-redux";
import { useState } from "react";
const Form = ({task, setTask}) => {
    const dispatch = useDispatch();
    const [error, setError] = useState('');

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (task === null || task.length === 0) {
          setError('Enter a task!');
          return;
        }
        dispatch(addTask(task));
        setTask('')

    }

    return (
        <form onSubmit={(e) => onSubmitHandler(e)}>
          <input 
            type='text' 
            name='todo' 
            value={task} 
            placeholder='Enter a task'
            onChange={(e) => setTask(e.target.value)}/>
          {error && <span id="error">{error}</span>}
        </form>
    )
}
export default Form;