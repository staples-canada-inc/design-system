import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button
} from 'reactstrap';


storiesOf("Content", module)
    .add("Card", () => (
        <div>
            <Card style={{ width: 330 }}>
                <CardImg top width="100px" src="https://source.unsplash.com/300x200?nature" alt="Card image cap" />
                <CardBody className='p-5'>
                    <CardTitle className='h5 mb-3'>Card title</CardTitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button className='btn btn-link'>View More</Button>
                </CardBody>
            </Card>
        </div>
    )
    )