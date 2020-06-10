import React,{Component} from 'react';
import {connect} from 'react-redux'


class Input extends Component{
  state ={}
  render(){
    return(
      <div className="center collection-item">
        <input placeholder="Add Your Task" type="text" onChange={(e)=>{this.props.handleChange(e.target)}}/>
        <button className ="waves-effect waves-light btn" onClick={()=>{this.props.add(this.props.input)}}>Add</button>
        <h5> Click on  the task to delete</h5>
      </div>
    )
  }
  
}

const mapDispatchToProps=(dispatch)=>{
  return{
    handleChange:(target)=>{
      dispatch({type:'SET_INPUT',value:target.value})
    },
    add:(input)=>{
      let obj ={}
      let inputValue=input
      let id=Math.floor(Math.random()*1000)
      obj ={inputValue,id}
      dispatch({type:'ADD_INPUT',value:obj})
    }
  }
}

const mapStateToProps=(state)=>{
  return {
    input:state.input
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Input);