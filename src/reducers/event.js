import {EVENT_FETCHED} from '../actions/event'
import {EVENT_UPDATE_SUCCESS} from '../actions/event'

export default (state = null, action={}) => {
    switch(action.type){
        case EVENT_FETCHED:
            return action.event
        case EVENT_UPDATE_SUCCESS:
            return action.event
            
        default:
        return state
    }




}