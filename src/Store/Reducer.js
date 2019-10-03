import actions from './action'
const initState = {
    todo :[]
}

const reducer =(state=initState,action)=>{
    let newState = state;
    switch (action.type) {
        case actions.ADD_ToDO :
          
            newState = {...state,todo:[...state.todo,action.payload]}
            break;
        case actions.DELETE_TODO :
            console.log(action)
            newState = {...state, todo: state.todo.filter(itme => { 
                return (itme.id !==action.payload.id)})}
            break;
        default:
            newState = state;
            break;
    }
    return newState;
}
export default reducer;