import {useReducer} from "react";

const reducer = (state, action) => {
    switch(action.type) {
        case "UPDATE_AMOUNT":
            return {
                ...state, 
                finalamount: action.payload,
            };
        case "HIDE_PRODUCT":
            return {
                ...state, 
                finalamount: 0,
                isProductVisible: false
            };
        default:
            return state;
    }
};

const useGlobalState = () => {
    const [globalState, globalDispatch] = useReducer(reducer, {
        finalamount: 0,
        isProductVisible: true
    })
    return {globalState, globalDispatch}
};

export default useGlobalState;