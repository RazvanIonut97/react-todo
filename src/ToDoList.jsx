import ToDoItem from "./ToDoItem";
import {SortableElement} from 'react-sortable-hoc';

const SortableItem = SortableElement(ToDoItem) ;

const ToDoList=({items})=> {
    return (
        <div className="list">
            {items.map((x,i)=>{
                return <SortableItem index={i} key={x._id} item={x}/>
            })}
        </div>
    )
}
export default  ToDoList;