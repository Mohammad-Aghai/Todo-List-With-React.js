import TodoBtns from "./todoBtns";
import TodoTitle from "./todoTitile";
export default function Todo(props) {
   return <div className="listBox__todo"  style={{backgroundColor : props.backGround}}>
      <TodoTitle TodoName={props.TodoName}/>
      <TodoBtns setFixTodo = {props.setFixTodo} fixTodo = {props.fixTodo} todoArrayCopy={props.todoArrayCopy}      handleTodo = {props.handleTodo}/>
   </div>
}