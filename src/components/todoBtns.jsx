import React, { Component } from 'react'

export class TodoBtns extends Component {
  constructor(props){
    super(props)
    let isComplete = false;
    this.isCompleteStatus = (e)=>{
      if(isComplete === false){
        isComplete = true
        e.target.parentElement.parentElement.firstChild.classList.add('text-Delete');
      }else{
        isComplete = false
        e.target.parentElement.parentElement.firstChild.classList.remove('text-Delete');
      }
    }
    
    this.removeTodoHandler = (event)=>{
      let todoName  = event.target.parentElement.parentElement.firstChild.textContent;
      let todoHandle =  props.todoArrayCopy.findIndex((todo)=>{
          return todo.TodoName === todoName 
        })
        props.todoArrayCopy.splice(todoHandle,1)
      console.log(todoHandle);
      props.setFixTodo(  {
        BackgroundArray: props.fixTodo.BackgroundArray,
        TodoArray: props.todoArrayCopy ,
        todoElms: props.handleTodo(props.todoArrayCopy),
     })
    }
  }
  render() {
    return (
                        <div className="tod__btnBox">
                        <button className="btnBox__btn removeBtn" onClick={this.removeTodoHandler}>Remove todo</button>
                        <button className="btnBox__btn isComplete" onClick={this.isCompleteStatus} >completed</button>
                     </div>
    )
  }
}

export default TodoBtns