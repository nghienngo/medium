import * as types from '../constants/types';

const initialState = {
    counter: 0,
}

const counterReducer = (state = initialState, action) => {
    switch (action.type){
        case types.INCREMENT:
            return {
                counter: state.counter + 1
            };
        case types.DECREMENT:
            return {
                counter: state.counter - 1
            };
        case types.RESET:
            return {
                counter: 0
            };
        default:
            return {
                counter: state.counter
            };

    }
}
export default counterReducer;