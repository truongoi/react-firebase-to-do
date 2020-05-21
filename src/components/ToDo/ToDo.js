import React, { Component } from 'react';
import ToDoInput from './ToDoInput/ToDoInput';
import ToDoList from './ToDoList/ToDoList';
import Axios from 'axios';

class ToDo extends Component {
  state = {
    ToDoList: [],
    value: ''
  }

  componentDidMount() {
    Axios.get('https://react-to-do-13884.firebaseio.com/tasks.json')
      .then(res => {
        console.log(res.data)
        this.setState({ToDoList: res.data})
      })
      .catch(error => {
        console.log(error)
      });
  }

  onChangeValueHandler = (val) => {
    this.setState({ value: val.target.value });
  }

  onSubmitHandler = (e) => {
    e.preventDefault();
    const currentList = this.state.ToDoList;
    const newList = [...currentList, {
      id: Date.now(),
      task: this.state.value,
      done: false
    }]
    this.setState({ ToDoList: newList, value: '' });

    Axios.put('https://react-to-do-13884.firebaseio.com/tasks.json', newList)
      .then(res => {
        console.log(res.data)
      })
      .catch(error => {
        console.log(error)
      });
  }

  onTaskChangeHandler = (id) => {
    var newToDoList = [...this.state.ToDoList];
    newToDoList.map((obj, index) => {
      return obj.id === id ? newToDoList[index].done = !obj.done : null;
    })
    this.setState({ ToDoList: newToDoList });

    Axios.put('https://react-to-do-13884.firebaseio.com/tasks.json', newToDoList)
      .then(res => {
        console.log(res.data)
      })
      .catch(error => {
        console.log(error)
      });
  }

  render() {
    return (
      <>
        <ToDoInput value={this.state.value} onChangeValue={this.onChangeValueHandler} onSubmit={this.onSubmitHandler} />
        {this.state.ToDoList.length > 0 && <ToDoList list={this.state.ToDoList} onTaskChange={this.onTaskChangeHandler} />}
      </>
    );
  }
}

export default ToDo;
