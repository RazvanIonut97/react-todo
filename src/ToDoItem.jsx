
const ToDoItem=({item})=> {
    return (
        <div className="item">
            <h2>
                {item.title}
            </h2>
        </div>
    )
}
export default ToDoItem;