import UxTitle from "./uxTitle";
import UxBox from "./uxBox";
import { useState } from "react";
import Todo from './todo';

let todoArrayCopy = [];
export default function Container(props) {

   const [fixTodo, setFixTodo] = useState(
      {
         BackgroundArray: [
            "#00d777cb",
            "#005ad7cb",
            "#c500d7a3",
            "#d70052a3",
            "#1dd700a3",
            "#d7d300a3",
         ],
         TodoArray: todoArrayCopy,
         todoElms: null
      }
   )


function todoAuthenticator(event){
   if (event.target.value.trim() === '') {
      alert('please write something')
   }else {

      todoArrayCopy.push({ TodoName: event.target.value })

      setFixTodo({
         BackgroundArray: [
            "#00d777cb",
            "#005ad7cb",
            "#c500d7a3",
            "#d70052a3",
            "#1dd700a3",
            "#d7d300a3",
         ],
         TodoArray: todoArrayCopy,
         todoElms: handleTodo(todoArrayCopy)
      })
       event.target.value = ''
   }
}

   function handleNewTodo(event) {
      if (event.keyCode === 13) {
         todoAuthenticator(event)
      }
            
   }
   function handleTodo(todoArray) {
      return todoArray.map((todo, index) => {
         let randomNumber = Math.floor(Math.random(10) * fixTodo.BackgroundArray.length)
         let randomBackGround = fixTodo.BackgroundArray[randomNumber]
         return <Todo todoArrayCopy= {todoArrayCopy} TodoName={todo.TodoName} key={index} backGround={randomBackGround} setFixTodo ={setFixTodo} fixTodo = {fixTodo}  handleTodo = {handleTodo} />
      })
   }

   return <div className="container">
      <UxTitle Title="Create New Todo" />
      <UxBox
         BtnId="uxBox__addBtn"
         BtnId2="uxBox__clearBtn"
         BtnText="Add Todo"
         BtnText2="Clear All"
         newTodoHandler={() => handleNewTodo}
         stateForClear = {fixTodo}
         setStateForClear = {setFixTodo}
         todoArrayCopy = {todoArrayCopy}
         todoAuthenticator = {(event) => todoAuthenticator(event)}
         handleTodo = {handleTodo}
      />
      <UxTitle Title="TodoList" />
      <div className="listBox" >{fixTodo.todoElms}</div>

   </div>
}
