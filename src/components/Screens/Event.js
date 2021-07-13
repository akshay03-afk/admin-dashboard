import React from 'react'
import { Container, Divider } from '@material-ui/core';



const Event = () => {
    return (
    <>
        <Container className="container">
            <div className="box">
                <h3 className="header">Event Setting</h3>
                <Divider />
                <div classname="events">
                <ul className="list-header">
                    <li className="active">General</li>
                    <li className="active">Privacy</li>
                    <li className="active">Features</li>
                    <li className="active">Customization</li>
                    <li className="active">Integration</li>
                    <li className="active">Session Settings  </li>
                    <li className="active">My Plans</li>

                </ul>
                </div>
            </div>
        </Container>
    </>
    )
}

export default Event;
