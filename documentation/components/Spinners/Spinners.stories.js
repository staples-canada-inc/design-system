import React from 'react';
import { storiesOf } from '@storybook/react';
import SpinnerStaples from './SpinnerStaples';
import { Spinner } from 'reactstrap';



storiesOf("Validation and Progress/Spinners", module)
    .add("Primary", () => (
        <div>
            <SpinnerStaples size="sm" />
            <SpinnerStaples />
            <SpinnerStaples size="lg" />
        </div>
    ))
    .add("Secondary", () => (
        <div>
            <Spinner color="secondary" size="sm" />
            <Spinner color="secondary" />
            <Spinner color="secondary" size="lg" />
        </div>

    ))