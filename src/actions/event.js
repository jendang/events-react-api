import request from 'superagent'

export const EVENT_FETCHED = 'EVENT_FETCHED'
export const EVENT_DELETE_SUCCESS = 'EVENT_DELETE_SUCCESS'
export const EVENT_UPDATE_SUCCESS = 'EVENT_UPDATE_SUCCESS'

const baseUrl = 'http://localhost:4000'

const eventFetched = (event) => ({
  type: EVENT_FETCHED,
  event
  
})

export const loadEvent = (id) => (dispatch) => {
    // when the state already contains events, we don't fetch them again
    //if(getState().events) return  NO need this step
   // request a get() method
    request
        .get(`${baseUrl}/events/${id}`)
        //.findById(id)
      .then(response => {
        // dispatch an EVENTS_FETCHED action that contains the events
        dispatch(eventFetched(response.body))
      })
      .catch(console.error)
}

const deleteEventSuccess = (eventId) => ({
    type: EVENT_DELETE_SUCCESS,
    eventId
})

export const deleteEvent = (id) => (dispatch) => {
    // when the state already contains events, we don't fetch them again
    //if(getState().events) return  NO need this step
   // request a get() method
   dispatch(deleteEventSuccess(id))
    request
        .delete(`${baseUrl}/events/${id}`)
        //.findById(id)
      .then(response => {
          
        // dispatch an EVENTS_FETCHED action that contains the events
       //console.log(response)
       return response
      })
      .catch(console.error)
}

const updateEventSuccess = (event) => ({
    type: EVENT_UPDATE_SUCCESS,
    event
})


export const updateEvent = (id,data) => (dispatch) => {
    
    request
    .put(`${baseUrl}/events/${id}`)
    .send(data)
    .then(response => {
        dispatch(updateEventSuccess(response.body))
        
      })
      .catch(console.error)
}