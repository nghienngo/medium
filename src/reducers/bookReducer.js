import * as types from '../constants/types';

const initialState = {
    books: []
}

const bookReducer = (state = initialState, action) => {
    switch (action.type){
        case types.GET_LIST_BOOK:
            return {
                ...state, 
                books: action.payload.map(
                    book => ({...book, choose: false})
                )
            };
        case types.CHOOSE_BOOK:
            return {
                ...state,
                books: state.books.map(
                    book => book.id === action.book.id ? ({...book, choose: !book.choose}) : book
                )
            }
        default:
            return state;

    }
}

export default bookReducer;

