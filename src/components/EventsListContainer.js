import React from 'react'
import {loadEvents} from '../actions/events'
import {connect} from 'react-redux'
import EventsList from './EventsList'

class EventsListContainer extends React.Component {
  componentDidMount() {
    this.props.loadEvents()
  }

  render() {
      //if there is no events, loading ...
    if(!this.props.events) return "Loading ..."
    return <EventsList events={this.props.events} />
  }
}

const mapStateToProps = state => ({
  events: state.events
})

export default connect(mapStateToProps, {loadEvents})(EventsListContainer)