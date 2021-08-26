import './components-style/AddToDo.css'

const AddTodo=()=>{
    return (
        <div className="addTodo">
            <div className="checkbox"></div>
            <div className="add">
                <input type="text" placeholder="Create new todo"/>
            </div>
        </div>
    )
}

export default AddTodo;
