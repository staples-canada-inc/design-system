import React from 'react';

import { storiesOf } from '@storybook/react';
import markdownNotes from './button.md';

import { Button, ButtonGroup, ButtonDropdown, UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';

storiesOf('Elements/Button', module)
    .add('Standard', () => (
        <div>
            <Button color="primary" outline>Primary Button</Button>
            <Button color="secondary" outline>Secondary Button</Button>
            <Button color="tertiary" outline>Tertiary Button</Button>
        </div>
    ), {
            notes: { markdown: markdownNotes }
        })
    .add('Call to Action', () => (
        <div>
            <Button color="primary">Primary Button</Button>
            <Button color="secondary">Secondary Button</Button>
            <Button color="tertiary">Tertiary Button</Button>
        </div>
    ))
    .add('Large', () => (
        <div>
            <Button color="primary" size="lg" outline>Primary Button</Button>
            <Button color="secondary" size="lg" outline>Secondary Button</Button>
            <Button color="tertiary" size="lg" outline>Secondary Button</Button>
        </div>
    ))
    .add('Small', () => (
        <div>
            <Button color="primary" size="sm" outline>Primary Button</Button>
            <Button color="secondary" size="sm" outline>Secondary Button</Button>
            <Button color="tertiary" size="sm" outline>Secondary Button</Button>
        </div>
    ))
    .add('Block', () => (
        <div style={{ minWidth:300 }}>
            <Button color="primary" block outline>Primary Button</Button>
            <Button color="secondary" block outline>Secondary Button</Button>
            <Button color="tertiary" block outline>Tertiary Button</Button>
        </div>
    ))
    .add('Active State', () => (
        <div>
            <Button color="primary" active>Primary Button</Button>
            <Button color="secondary" active>Secondary Button</Button>
            <Button color="tertiary" active>Tertiary Button</Button>
        </div>
    ))
    .add('Disabled State', () => (
        <div>
            <Button color="primary" disabled outline>Primary Button</Button>
            <Button color="secondary" disabled outline>Secondary Button</Button>
            <Button color="tertiary" disabled outline>Tertiary Button</Button>
        </div>
    ))
    .add('Group', () => (
        <div>
            <ButtonGroup>
                <Button color="primary" outline>Left</Button>
                <Button color="primary" outline>Middle</Button>
                <Button color="primary" outline>Right</Button>
            </ButtonGroup>
        </div>
    ))
    .add('Dropdown', () => (
        <div>
            <UncontrolledButtonDropdown>
                <DropdownToggle color="primary" caret outline>Dropdown Button</DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
            </UncontrolledButtonDropdown>
            <UncontrolledButtonDropdown>
                <DropdownToggle color="secondary" caret outline>Dropdown Button</DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
            </UncontrolledButtonDropdown>
            <UncontrolledButtonDropdown>
                <DropdownToggle color="tertiary" caret outline>Dropdown Button</DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
            </UncontrolledButtonDropdown>
        </div>
    ))