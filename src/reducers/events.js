import {EVENTS_FETCHED} from '../actions/events'
import {EVENT_CREATE_SUCCESS} from '../actions/createEvent'
import {EVENT_DELETE_SUCCESS} from '../actions/event'

export default (state = null, action={}) => {
    switch(action.type){
        case EVENTS_FETCHED:
            return action.events
        case EVENT_CREATE_SUCCESS:
            return [...state, action.event]
        case EVENT_DELETE_SUCCESS:
            return state && state.filter(event => event.id !== action.eventId)
        default:
        return state
    }




}