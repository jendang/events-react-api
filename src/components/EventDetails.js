import React from 'react';

export default function EventDetails(props){
    return(
        <div>
            {props.event.map(event => {
                return (
                    <div>
                        <h1>{event.name}</h1>
                        <i>{event.date}</i>
                        <p>{event.description}</p>

                    </div>

                )
            })}

        </div>
    )

}