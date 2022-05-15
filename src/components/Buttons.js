import { useSelector, useDispatch } from "react-redux";
import { deleteCompleted } from "../redux/action";

const Buttons = ({setFilter}) => {
    const todos = useSelector(state => state.tasks);
    const dispatch = useDispatch();

    const filterHandler = (filter,i) => {
        const filterButtons = document.querySelectorAll('.filter-btn');
        for (let index = 0; index < filterButtons.length; index++) {
            filterButtons[index].classList.remove('active'); 
        } 
        setFilter(filter);
        filterButtons[i].classList.add('active');
    }
    return (
        <div className="footer">
            <span>{todos.filter((el, i) => {if (el.isCompleted) { return; } return el; }).length} items left</span>
            <div>
                <button value='ALL' onClick={() => filterHandler('ALL', 0)} className='filter-btn active'>All</button>
                <button value='ACTIVE' onClick={() => filterHandler('ACTIVE', 1)} className='filter-btn'>Active</button>
                <button value='COMPLETED' onClick={() => filterHandler('COMPLETED', 2)} className='filter-btn'>Completed</button>
            </div>
            <button onClick={() => dispatch(deleteCompleted)}>Clear Completed</button>
        </div>
    )
}
export default Buttons;