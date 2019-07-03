import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Badge, Button } from 'reactstrap';

storiesOf('Elements/Badge', module)
    .add('Scale to parent', () => (
        <div>
            <h1>Heading <Badge color="secondary">New</Badge></h1>
            <h2>Heading <Badge color="secondary">New</Badge></h2>
            <h3>Heading <Badge color="secondary">New</Badge></h3>
            <h4>Heading <Badge color="secondary">New</Badge></h4>
        </div>
    ))
    .add('Notification', () => (
        <div>
            <Button color="primary" outline>
                Notifications <Badge className="ml-2 rounded-circle" color="primary">4</Badge>
            </Button>
        </div>
    ))
    .add('Contextual', () => (
        <div>
            <Badge color="primary" pill>Primary</Badge>
            <Badge color="secondary" pill>Secondary</Badge>
            <Badge color="success" pill>Success</Badge>
            <Badge color="danger" pill>Danger</Badge>
            <Badge color="warning" pill>Warning</Badge>
            <Badge color="info" pill>Info</Badge>
            <Badge color="light" pill>Light</Badge>
            <Badge color="dark" pill>Dark</Badge>
        </div>
    ))