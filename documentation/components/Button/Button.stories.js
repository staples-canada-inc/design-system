import React from 'react';

import { storiesOf } from '@storybook/react';
import markdownNotes from './button.md';

import { Button, ButtonGroup, ButtonDropdown, UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';

storiesOf('Elements/Button', module)
    .add('Standard', () => (
        <div>
            <Button color="primary" >Primary Button</Button>
            <Button color="secondary" >Secondary Button</Button>
            <Button color="tertiary" >Tertiary Button</Button>
        </div>
    ), {
            notes: { markdown: markdownNotes }
        })
    .add('Call to Action', () => (
        <div>
            <Button color="primary" className="cta">Primary Button</Button>
            <Button color="secondary" className="cta">Secondary Button</Button>
            <Button color="tertiary" className="cta">Tertiary Button</Button>
        </div>
    ))
    .add('Large', () => (
        <div>
            <Button color="primary" size="lg">Primary Button</Button>
            <Button color="secondary" size="lg">Secondary Button</Button>
            <Button color="tertiary" size="lg">Secondary Button</Button>
        </div>
    ))
    .add('Small', () => (
        <div>
            <Button color="primary" size="sm">Primary Button</Button>
            <Button color="secondary" size="sm">Secondary Button</Button>
            <Button color="tertiary" size="sm">Secondary Button</Button>
        </div>
    ))
    .add('Block', () => (
        <div style={{ minWidth: 300 }}>
            <Button color="primary" block>Primary Button</Button>
            <Button color="secondary" block>Secondary Button</Button>
            <Button color="tertiary" block>Tertiary Button</Button>
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
            <Button color="primary" disabled>Primary Button</Button>
            <Button color="secondary" disabled>Secondary Button</Button>
            <Button color="tertiary" disabled>Tertiary Button</Button>
        </div>
    ))
    .add('Group', () => (
        <div>
            <ButtonGroup>
                <Button color="primary">Left</Button>
                <Button color="primary">Middle</Button>
                <Button color="primary">Right</Button>
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