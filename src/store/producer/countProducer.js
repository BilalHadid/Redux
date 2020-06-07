const initialstate = {
    value : 0,
    anothervalue: 20
}


export const countReducer = (state = initialstate ,action) => {

    switch(action.type) {

        case "increse_count":
            return{
                ...state,
                value: state.value + action.Payload
            }
        
        case "decrement_count":
            return{
                ...state,
                value: state.value - action.Payload
            }

        default:
            return {
                ...state
            }

          
    }
}