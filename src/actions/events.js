import request from 'superagent'

export const EVENTS_FETCHED = 'EVENTS_FETCHED'

const baseUrl = 'http://localhost:4000'

const eventsFetched = events => ({
  type: EVENTS_FETCHED,
  events
})

export const loadEvents = () => (dispatch, getState) => { // a function () return a new function (dispatch,getState)
  // when the state already contains events, we don't fetch them again
  if (getState().events) return // check if there is data, if there is no data "return" stop that function getState()

  // a GET /events request
  request(`${baseUrl}/events`) // create a promise
    .then(response => { //.then call that promise
      // dispatch an EVENTS_FETCHED action that contains the events
      dispatch(eventsFetched(response.body))
    })
    .catch(console.error)
}




