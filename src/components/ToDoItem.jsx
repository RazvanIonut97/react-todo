
const ToDoItem=({item})=> {
    return (
        <div className="item">
            <div></div>
            <input type="checkbox" name="" id={item._id} />
            <p>
                {item.title}
            </p>
            <button className="close-btn"></button>
        </div>
    )
}
export default ToDoItem;