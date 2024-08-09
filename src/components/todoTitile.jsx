import React, { Component } from 'react'

export class TodoTitle extends Component {
  render() {
    return (
                        <p className="todo__title">{this.props.TodoName}</p>
    )
  }
}

export default TodoTitle