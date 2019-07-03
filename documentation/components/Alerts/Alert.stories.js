import React from 'react';
import { storiesOf } from '@storybook/react';
import { Alert, UncontrolledAlert } from 'reactstrap';


storiesOf('Elements/Alert', module)
    .add('Simple', () => (
        <div>
            <Alert color="primary">This is a primary alert — check it out!</Alert>
            <Alert color="secondary">This is a secondary alert — check it out!</Alert>
            <Alert color="success">This is a success alert — check it out!</Alert>
            <Alert color="danger">This is a danger alert — check it out!</Alert>
            <Alert color="warning">This is a warning alert — check it out!</Alert>
            <Alert color="info">This is a info alert — check it out!</Alert>
        </div>
    ))
    .add('Large', () => (
        <div>
            <Alert color="success">
                <h4 className="alert-heading">Well done!</h4>
                <p>
                    Aww yeah, you successfully read this important alert message. This example text is going
                    to run a bit longer so that you can see how spacing within an alert works with this kind
                    of content.
          </p>
                <hr />
                <p className="mb-0">
                    Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
          </p>
            </Alert>
        </div>
    ))
    .add('Dismiss', () => (
        <div>
            <UncontrolledAlert color="info">
                I am an alert and I can be dismissed!
            </UncontrolledAlert>
        </div >
    ))