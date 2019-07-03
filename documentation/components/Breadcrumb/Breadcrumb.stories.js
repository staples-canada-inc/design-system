import React from 'react';
import { storiesOf } from '@storybook/react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

storiesOf('Navigation', module)
    .add('Breadcrumb', () => (
        <div>
            <Breadcrumb>
                <BreadcrumbItem href="#">Home</BreadcrumbItem>
                <BreadcrumbItem href="#">
                    Library
                </BreadcrumbItem>
                <BreadcrumbItem active>Data</BreadcrumbItem>
            </Breadcrumb>
        </div>
    ))