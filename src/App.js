import React from 'react';
import Task from './components/Task';
import AddTask from './components/AddTask';
import { mdiDelete } from '@mdi/js'; 
import Icon from '@mdi/react';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      tasks: [
        { id: 0, title: 'Create todo app', done: true},
        
      ]
    }
  }

  taskInput = task => {
    this.setState(state => {
      let {tasks} = state;
      tasks.push({
        id: tasks.length !==0 ? task.length: 0,
        title: task,
        done: false
      });
      return tasks;
    });
  }

  
  doneTask = id => {
    const index = this.state.tasks.map(task => task.id).indexOf(id);
    this.setState(state => {
      let {tasks} = state;
      if(tasks[index].done){
        tasks[index].done = false;
      } else{
        tasks[index].done = true;
      }
      return tasks;
    });
  };

  render() {
    const { tasks } = this.state;

    function delBtnClick(e) {
      e.preventDefault();
      alert('Извините, но эта функция недоступна');
    }

    return(
      <div className="App">
        <div className="Header"> 
          <p>TODO list</p>
          <button onClick={delBtnClick} ><Icon path={ mdiDelete} size={1} /></button>
        </div>
        
        {tasks.map(task => (
          <Task
           doneTask={() => this.doneTask(task.id)}
           task={task}
           key={task.id}
          ></Task>
        ))}

        <AddTask taskInput={this.taskInput}></AddTask>
      </div>
    );
  }
}

export default App;
