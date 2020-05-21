import React, { Component } from 'react'

class ToDoInput extends Component {

  render() {
    const { value , onChangeValue, onSubmit } = this.props;

    return (
      <form className="flex mt-4" onSubmit={onSubmit}>
        <input
          className="flex-grow shadow focus:placeholder-blue-400 bg-white focus:outline-none py-2 px-4 mr-4 rounded"
          type='text'
          placeholder='Enter new task...'
          value={value}
          onChange={onChangeValue} />
        <button className="flex-none shadow bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add
        </button>
      </form>
    )
  }
}

export default ToDoInput