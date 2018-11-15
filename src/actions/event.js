import request from 'superagent'

export const EVENT_FETCHED = 'EVENT_FETCHED'

const baseUrl = 'http://localhost:4000'

const eventFetched = event => ({
  type: EVENT_FETCHED,
  payloads: 
  event
//   {    
//     name: event.name,
//     date: event.date,
//     description: event.description   
//   }
})

export const loadEvent = () => (dispatch, getState) => {
    const id = getState().events.id 
    // when the state already contains events, we don't fetch them again
    //if (id) return
  
    // a GET /events request
    request(`${baseUrl}/events/${id}`)
      .then(response => {
        // dispatch an EVENTS_FETCHED action that contains the events
        dispatch(eventFetched(response.body))
      })
      .catch(console.error)
  }