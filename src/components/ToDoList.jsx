import ToDoItem from "./ToDoItem";
import {SortableElement} from 'react-sortable-hoc';
import './components-style/ToDoList.css';

const SortableItem = SortableElement(ToDoItem) ;

const ToDoList=({items})=> {
    return (
        <div className="list">
            {items.map((x,i)=>{
                return <SortableItem index={i} key={x._id} item={x}/>
            })}
            <div className="status">
                <p>{items.length} items left</p>
                <p>Clear completed</p>
            </div>
        </div>
    )
}
export default  ToDoList;