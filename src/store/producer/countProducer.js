const initialstate = {
    value : 0
}


export const countReducer = (state = initialstate ,action) => {

    switch(action.type) {

        case "increse_count":

           break;
        
        case "decrement_count":

            break;

        default:
            return {
                ...state
            }

          
    }
}