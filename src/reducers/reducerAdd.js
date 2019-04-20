const initialState=[
    {id:1,name:'hamza',age:22},
    {id:2,name:'mohamed',age:23},
    {id:3,name:'abdo',age:24}
   ]

const changeitem=(state=initialState,action)=>{
    if (action.type==='ADD'){
        console.log('test')
        return state.concat(action.value)
    }
    if(action.type==='DEL'){
        return state.filter(e=>e!==action.value)
    }

  return state
}
export default changeitem