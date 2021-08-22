import './App.css';
import {SortableContainer} from 'react-sortable-hoc';
import ToDoList from './ToDoList';
import axios from 'axios'
import{useState,useEffect} from 'react'

function App() {
  
  const[todos,setTodos]=useState([]);
  const[trigger,setTrigger]=useState(true);
   useEffect(()=>{
  axios.get(process.env.REACT_APP_TEST).then(
      (response)=>{setTodos(response.data)
      console.log("Fired")
      }
      )
  },[trigger] )

  const SortableList = SortableContainer(ToDoList);
  const onSortEnd = (e) =>{
    //var newTodos = arrayMove(todos, e.oldIndex, e.newIndex )
    setTrigger(!trigger);
    console.log("muuuuuuuuuutare " +trigger)
    //setTodos(newTodos)
  };
  return (
    <div className="App">
      <SortableList items={todos} onSortEnd={onSortEnd}/>
    </div>
  );
}


export default App;
