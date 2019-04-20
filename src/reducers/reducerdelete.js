const Deleteitem=(state=[],action)=>{
    if (action.type==='Del'){
        return state.concat(action.value)

    }

  return state

}
export default Deleteitem