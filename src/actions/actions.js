import * as types from '../constants/types'

var books = [
    {
        id: 1,
        name: 'React',
        author: 'Zeigermann'
    },
    {
        id: 2,
        name: 'Needful Things',
        author: 'Stephen King'
    },
    {
        id: 3,
        name: 'Lords of Finance',
        author: 'Liaquat Ahamed'
    },
    {
        id: 4,
        name: "The Cuckoos's Calling",
        author: 'Robert Galbraith'
    }
] 

export function increment(){
    return {
        type: types.INCREMENT
    }
}

export function decrement(){
    return {
        type: types.DECREMENT
    }
}

export function reset(){
    return {
        type: types.RESET
    }
}

export const getListBook = () => ({
    type: types.GET_LIST_BOOK,
    payload: books
})

export const chooseBook = book => ({
    type: types.CHOOSE_BOOK,
    book
})
