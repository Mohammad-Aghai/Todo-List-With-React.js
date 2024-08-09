
import UxBoxBtns from "./uxBoxBtns";
export default function UxBox(props) {

  let todoParent = null;
  return <div className="uxBox">
    <label htmlFor="uxBox__input">
      Write the Todo Name Here And press The Add Todo Button
    </label>
    <input type="text" className="uxBox__input" onKeyUp={props.newTodoHandler(todoParent)} />

    <UxBoxBtns BtnId={props.BtnId} BtnText={props.BtnText} BtnText2={props.BtnText2} BtnId2={props.BtnId2} stateForClear={props.stateForClear} todoArrayCopy={props.todoArrayCopy} setStateForClear={props.setStateForClear} 
    todoAuthenticator = {(event) =>props.todoAuthenticator(event)}
    handleTodo= {props.handleTodo}/>
  </div>
}
