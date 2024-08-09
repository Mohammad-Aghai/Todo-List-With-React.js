import React, { Component } from 'react'

export class UxBoxBtns extends Component {

  constructor(props){
    super(props)
     this.clearAllHandler = ()=>{ 
  
      props.todoArrayCopy.splice(0,props.todoArrayCopy.length)
      this.props.setStateForClear({
        BackgroundArray: [
          "#00d777cb",
          "#005ad7cb",
          "#c500d7a3",
          "#d70052a3",
          "#1dd700a3",
          "#d7d300a3",
       ],
       TodoArray:  this.props.todoArrayCopy,
       todoElms: null,
       
      })
     }
    
     this.todoSetup = (event)=>{
      let inputElm  = document.querySelector('input');
      if (inputElm.value.trim() === '') {
        alert('please write something')
     }else {
      props.todoArrayCopy.push({ TodoName: inputElm.value })
  
      props.setStateForClear({
           BackgroundArray: [
              "#00d777cb",
              "#005ad7cb",
              "#c500d7a3",
              "#d70052a3",
              "#1dd700a3",
              "#d7d300a3",
           ],
           TodoArray: props.todoArrayCopy,
           todoElms: props.handleTodo(props.todoArrayCopy),
        })
        inputElm.value = ''
     }
     }
  
  }
                  
  render(props) {
    return (
                        <div className="uxBox__btnBox">

                        <button id={this.props.BtnId} className="uxBox__btn" onClick={(event) => this.todoSetup(event)}>
                          {this.props.BtnText}
                        </button>
                  
                        <button id={this.props.BtnId2} className="uxBox__btn" onClick={this.clearAllHandler} >
                          {this.props.BtnText2}
                        </button>
                      </div>
    )
  }
}

export default UxBoxBtns