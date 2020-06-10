const mainReducer=(state =[],action)=>{
  if(action.type === 'ADD_INPUT'){
    return state = [...state,action.value]
  }
  if(action.type === 'REMOVE_INPUT'){
    return state.filter(ele => ele.id!==action.id)
  }
  return state
}

export default mainReducer;