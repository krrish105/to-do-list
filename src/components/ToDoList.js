import { useSelector, useDispatch } from "react-redux";
import { deleteTask, completeTask } from "../redux/action";

const ToDoList = ({filter}) => {
    const todos = useSelector(state => state.tasks);
    const dispatch = useDispatch();
    const [classNames, setClassNames] = ('check-btn');
    const deleteT = (task, id, completed) => {
        dispatch(deleteTask(task, id, completed));
    }
    
    const complete = (i,task, id, completed) => {
        dispatch(completeTask(task, id, !completed));
        document.querySelectorAll('.check-btn')[i].classList.toggle('active')
        document.querySelectorAll('.list')[i].classList.toggle('done')
    }

    const tasks = () => {
        let list = todos;
        switch (filter) {
            case 'ACTIVE':
                list = todos.filter((el, i) => {
                    if (el.isCompleted) {
                        return;
                    }
                    return el;
                })
                break;
            case 'COMPLETED':
                list = todos.filter((el, i) => {
                    if (!el.isCompleted) {
                        return;
                    }
                    return el;
                })
                break;
            default:
                list = todos;
                break;
        }
        if (list.length >= 1){
            return list.map((el, i) => {
                return (
                <li key={i} className={el.isCompleted ? 'list done' : 'list'}>
                    <button onClick={() => complete(i,el.task, el.id, el.isCompleted)} className={el.isCompleted ? 'check-btn active' : 'check-btn'}><img src="./assets/icon-check.svg" alt=""/></button>
                    <span>{el.task}</span>
                    <button onClick={() => deleteT(el.task, el.id, el.isCompleted)} className="cross-btn"><img src="./assets/icon-cross.svg" alt=""/></button>
                </li>)
            })   
        }
    }

    return (
        <ul id='task-container'>
            {tasks()}
        </ul>
    )
}
export default ToDoList;