import React, { Component } from 'react'

class ToDoListItem extends Component {
  onTaskChange = (id) => {
    this.props.onTaskChange(id);
  }

  render() {
    return (
      <li className="mb-4">
        <label className="custom-label flex">
          <div className="bg-white shadow w-6 h-6 p-1 flex justify-center items-center mr-2 rounded">
            <input type="checkbox" className="hidden" checked={this.props.done} onChange={() => this.onTaskChange(this.props.id)} />
            <svg className={this.props.done ? "w-4 h-4 text-green-600 pointer-events-none" : "hidden w-4 h-4 text-green-600 pointer-events-none"} viewBox="0 0 172 172">
              <g 
                style={{
                  fill: 'none',
                  strokeWidth: 'none',
                  strokeMiterlimit: '10',
                  fontFamily: 'none',
                  fontWeight: 'none',
                  fontSize: 'none',
                  textAnchor: 'none',
                  mixBlendMode: 'normal'
                }}>
                <path d="M0 172V0h172v172z"/>
                <path d="M145.433 37.933L64.5 118.8658 33.7337 88.0996l-10.134 10.1341L64.5 139.1341l91.067-91.067z" 
                  style={{
                    fill: 'currentColor',
                    strokeWidth: '1'
                  }} />
              </g>
            </svg>
          </div>
          <span className={this.props.done ? 'text-opacity-50 select-none' : 'select-none'}>{this.props.task}</span>
        </label>
      </li>
    )
  }
}

export default ToDoListItem