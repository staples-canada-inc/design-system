import React from 'react';
import { storiesOf } from '@storybook/react';
import { UncontrolledTooltip } from 'reactstrap';

storiesOf('Content', module)
    .add("Tooltip", () => (
        <div>
            <br/>
            <p>This tooltip displays to the <span style={{ textDecoration: "underline", color: "#198294" }} href="#" id="UncontrolledTooltipExampleTop">top</span>.</p>
            <UncontrolledTooltip placement="top" target="UncontrolledTooltipExampleTop">
                Hello world!
            </UncontrolledTooltip>

            <p>This tooltip displays to the <span style={{ textDecoration: "underline", color: "#198294" }} href="#" id="UncontrolledTooltipExampleRight">right</span>.</p>
            <UncontrolledTooltip placement="right" target="UncontrolledTooltipExampleRight">
                Hello world!
            </UncontrolledTooltip>

            <p>This tooltip displays to the <span style={{ textDecoration: "underline", color: "#198294" }} href="#" id="UncontrolledTooltipExampleBottom">bottom</span>.</p>
            <UncontrolledTooltip placement="bottom" target="UncontrolledTooltipExampleBottom">
                Hello world!
            </UncontrolledTooltip>

            <p>This tooltip displays to the <span style={{ textDecoration: "underline", color: "#198294" }} href="#" id="UncontrolledTooltipExampleLeft">left</span>.</p>
            <UncontrolledTooltip placement="left" target="UncontrolledTooltipExampleLeft">
                Hello world!
            </UncontrolledTooltip>
        </div>
    ))