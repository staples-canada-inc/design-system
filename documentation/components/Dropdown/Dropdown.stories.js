import React from "react";
import { storiesOf } from "@storybook/react";
import {
    Button, ButtonGroup, ButtonDropdown, UncontrolledButtonDropdown,
    UncontrolledDropdown,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle
} from "reactstrap";

storiesOf("Navigation/Dropdown", module)
    .add("Button", () => (
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
    .add("Directions", () => (
        <div>
            <UncontrolledDropdown className="mx-3 inline-flex mt-5 mb-3" direction="up">
                <DropdownToggle color="primary" caret outline>Dropup</DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown className="mx-3 inline-flex mb-3" direction="left">
                <DropdownToggle color="primary" caret outline>Dropleft</DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown className="mx-3 inline-flex" direction="right">
                <DropdownToggle color="primary" caret outline>Dropright</DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        </div>
    ));
