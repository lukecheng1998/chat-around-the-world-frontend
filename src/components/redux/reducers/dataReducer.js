import {SET_CHATS, LOADING_DATA, SEND_A_CHAT} from '../types'
const initialState = {
    chats : [],
    loading: false
}
export default function(state = initialState, action){
    switch(action.type){
        case LOADING_DATA:
            return {
                ...state,
                loading: true,
            }
        case SET_CHATS:
            return {
                ...state,
                chats: action.payload,
                loading: false
            }
        case SEND_A_CHAT:
            return {
                ...state,
                chats: [
                    action.payload,
                    ...state.chats
                ]
            }
        default:
            return state;
    }
}