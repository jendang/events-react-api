import React, { Component } from 'react';

class EventForm extends Component {
   
    render() { 
        return ( 
            <form onSubmit={this.props.onSubmit} >
                <label htmlFor="name">Name</label>
                <input id="name" type="text" name="name" value={this.props.values.name} onChange={this.props.onChange}></input>

                <label htmlFor="date">Date</label>
                <input id="date" type="text" name="date" value={this.props.values.date} onChange={this.props.onChange}></input>

                <label htmlFor="description">Description</label>
                <input id="description" type="text" name="description" value={this.props.values.description} onChange={this.props.onChange}></input>

                <button>Save</button>
            </form>
         );
    }
}
 
export default EventForm;