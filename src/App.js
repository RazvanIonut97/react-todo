import './App.css';
import {SortableContainer} from 'react-sortable-hoc';
import ToDoList from './components/ToDoList';
import Background from './components/Background';
import axios from 'axios'
import{useState,useEffect} from 'react'
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import Filter from './components/Filter';

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
    console.log(e)
    //setTodos(newTodos)
  };
  return (
    <div className="App">
      <Background/>
      <div className="ceva">
      <Header/>
      <AddTodo/>
      <SortableList items={todos} onSortEnd={onSortEnd}/>
      <Filter/>
      </div>
     
    </div>
  );
}


export default App;
