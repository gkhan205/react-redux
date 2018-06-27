import {DELETE_RESULT, STORE_RESULT} from "./actionsTypes";

export const saveResult = (value) => {
    return {
        type: STORE_RESULT,
        result: value
    }
};

export const storeResult = (value) => {
    return function(dispatch){
        // setTimeout() is used to demonstrate that how we can use asynchronous functions with redux using redux thunk middleware
        setTimeout(() => {
            dispatch(saveResult(value))
        }, 500);
    };
};

export const deleteResult = (value) => {
    return {
        type: DELETE_RESULT,
        id: value
    }
};