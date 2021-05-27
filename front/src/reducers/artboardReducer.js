import {GET_ARTBOARDS} from '../actions/types.js';

const initialState = {
    artboards: []
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_ARTBOARDS:
            return {
                ...state,
                artboards: action.payload
            }
        default:
            return state;
    }
}