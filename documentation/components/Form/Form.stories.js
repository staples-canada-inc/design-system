import React from 'react';
import { storiesOf } from '@storybook/react';
import { Col, CustomInput, Row, Button, Form, FormGroup, FormFeedback, Label, Input, FormText } from 'reactstrap';

storiesOf('Elements/Form', module)
    .add('Text Inputs', () => (
        <div>
            <Form>
                <FormGroup>
                    <Label for="exampleEmail">Plain Text (Static)</Label>
                    <Input plaintext value="Some plain text/ static value" required />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="with a placeholder"
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input
                        type="password"
                        name="password"
                        id="examplePassword"
                        placeholder="password placeholder"
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleUrl">URL</Label>
                    <Input
                        type="url"
                        name="url"
                        id="exampleUrl"
                        placeholder="url placeholder"
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleNumber">Number</Label>
                    <Input
                        type="number"
                        name="number"
                        id="exampleNumber"
                        placeholder="number placeholder"
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleDatetime">Datetime</Label>
                    <Input
                        type="datetime"
                        name="datetime"
                        id="exampleDatetime"
                        placeholder="datetime placeholder"
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleDate">Date</Label>
                    <Input
                        type="date"
                        name="date"
                        id="exampleDate"
                        placeholder="date placeholder"
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleTime">Time</Label>
                    <Input
                        type="time"
                        name="time"
                        id="exampleTime"
                        placeholder="time placeholder"
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleColor">Color</Label>
                    <Input
                        type="color"
                        name="color"
                        id="exampleColor"
                        placeholder="color placeholder"
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleSearch">Search</Label>
                    <Input
                        type="search"
                        name="search"
                        id="exampleSearch"
                        placeholder="search placeholder"
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleSelect">Select</Label>
                    <Input type="select" name="select" id="exampleSelect" required>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleSelectMulti">Select Multiple</Label>
                    <Input
                        type="select"
                        name="selectMulti"
                        id="exampleSelectMulti"
                        multiple
                        required
                    >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleText">Text Area</Label>
                    <Input type="textarea" name="text" id="exampleText" required/>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleFile">File</Label>
                    <Input type="file" name="file" id="exampleFile" required/>
                    <FormText color="muted">
                        This is some placeholder block-level help text for the above input.
                        It's a bit lighter and easily wraps to a new line.
          </FormText>

                </FormGroup>
            </Form>
        </div>
    ))
    .add('Form Grid', () => (
        <div>
            <Form>
                <FormGroup row>
                    <Label for="exampleEmail" sm={2}>Email</Label>
                    <Col sm={10}>
                        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" required/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="examplePassword" sm={2}>Password</Label>
                    <Col sm={10}>
                        <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" required/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="exampleSelect" sm={2}>Select</Label>
                    <Col sm={10}>
                        <Input type="select" name="select" id="exampleSelect">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Input>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="exampleText" sm={2}>Text Area</Label>
                    <Col sm={10}>
                        <Input type="textarea" name="text" id="exampleText" required/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="exampleFile" sm={2}>File</Label>
                    <Col sm={10}>
                        <Input type="file" name="file" id="exampleFile" required/>
                        <FormText color="muted">
                            This is some placeholder block-level help text for the above input.
                            It's a bit lighter and easily wraps to a new line.
            </FormText>
                    </Col>
                </FormGroup>
                <Row form>
                    <Col className="d-flex">
                        <Button type="submit" className="btn ml-auto" value="submit">Submit</Button>
                    </Col>
                </Row>
            </Form>
        </div>
    ))
    .add('Form Grid Rows', () => (
        <div>
            <Form>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" required/>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" required/>
                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup>
                    <Label for="exampleAddress">Address</Label>
                    <Input type="text" name="address" id="exampleAddress" placeholder="1234 Main St" required/>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleAddress2">Address 2</Label>
                    <Input type="text" name="address2" id="exampleAddress2" placeholder="Apartment, studio, or floor" required/>
                </FormGroup>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="exampleCity">City</Label>
                            <Input type="text" name="city" id="exampleCity" placeholder="Awesome Town" required/>
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="exampleState">State</Label>
                            <Input type="text" name="state" id="exampleState" placeholder="Perfect State" required/>
                        </FormGroup>
                    </Col>
                    <Col md={2}>
                        <FormGroup>
                            <Label for="exampleZip">Postal Code</Label>
                            <Input type="text" name="zip" id="exampleZip" placeholder="A1B 2C3" required/>
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col className="d-flex">
                        <Button type="submit" className="btn ml-auto" value="submit">Submit</Button>
                    </Col>
                </Row>
            </Form>
        </div>
    ))
    .add('Form Inline', () => (
        <div>
            <Form inline>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="exampleEmail" className="mr-sm-2">Email</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="something@idk.cool" required/>
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="examplePassword" className="mr-sm-2">Password</Label>
                    <Input type="password" name="password" id="examplePassword" placeholder="don't tell!" required/>
                </FormGroup>
                <Button>Submit</Button>
            </Form>
        </div>
    ))
    .add('Form Validation', () => (
        <div>
            <Form>
                <FormGroup>
                    <Label for="exampleEmail">Input without validation</Label>
                    <Input required />
                    <FormFeedback>You will not be able to see this</FormFeedback>
                    <FormText>Example help text that remains unchanged.</FormText>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleEmail">Valid input</Label>
                    <Input valid required/>
                    <FormFeedback valid>Sweet! that name is available</FormFeedback>
                    <FormText>Example help text that remains unchanged.</FormText>
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Invalid input</Label>
                    <Input invalid required />
                    <FormFeedback>Oh noes! that name is already taken</FormFeedback>
                    <FormText>Example help text that remains unchanged.</FormText>
                </FormGroup>
            </Form>
        </div>
    ))
    .add('Select Inputs', () => (
        <div>
            <Form>
                <FormGroup>
                    <Label for="exampleCheckbox">Checkboxes</Label>
                    <div>
                        <CustomInput type="checkbox" id="exampleCustomCheckbox" label="Check this custom checkbox" />
                        <CustomInput type="checkbox" id="exampleCustomCheckbox2" label="Or this one" />
                        <CustomInput type="checkbox" id="exampleCustomCheckbox3" label="But not this disabled one" disabled />
                        <CustomInput type="checkbox" id="exampleCustomCheckbox4" label="Can't click this label to check!" htmlFor="exampleCustomCheckbox4_X" disabled />
                    </div>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleCheckbox">Radios</Label>
                    <div>
                        <CustomInput type="radio" id="exampleCustomRadio" name="customRadio" label="Select this custom radio" />
                        <CustomInput type="radio" id="exampleCustomRadio2" name="customRadio" label="Or this one" />
                        <CustomInput type="radio" id="exampleCustomRadio3" label="But not this disabled one" disabled />
                        <CustomInput type="radio" id="exampleCustomRadio4" label="Can't click this label to select!" htmlFor="exampleCustomRadio4_X" disabled />
                    </div>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleCheckbox">Switches</Label>
                    <div>
                        <CustomInput type="switch" id="exampleCustomSwitch" name="customSwitch" label="Turn on this custom switch" />
                        <CustomInput type="switch" id="exampleCustomSwitch2" name="customSwitch" label="Or this one" />
                        <CustomInput type="switch" id="exampleCustomSwitch3" label="But not this disabled one" disabled />
                        <CustomInput type="switch" id="exampleCustomSwitch4" label="Can't click this label to turn on!" htmlFor="exampleCustomSwitch4_X" disabled />
                    </div>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleCheckbox">Inline</Label>
                    <div>
                        <CustomInput type="checkbox" id="exampleCustomInline" label="An inline custom input" inline />
                        <CustomInput type="checkbox" id="exampleCustomInline2" label="and another one" inline />
                    </div>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleCustomSelect">Custom Select</Label>
                    <CustomInput type="select" id="exampleCustomSelect" name="customSelect" required>
                        <option value="">Select</option>
                        <option>Value 1</option>
                        <option>Value 2</option>
                        <option>Value 3</option>
                        <option>Value 4</option>
                        <option>Value 5</option>
                    </CustomInput>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleCustomMutlipleSelect">Custom Multiple Select</Label>
                    <CustomInput type="select" id="exampleCustomMutlipleSelect" name="customSelect" multiple required>
                        <option value="">Select</option>
                        <option>Value 1</option>
                        <option>Value 2</option>
                        <option>Value 3</option>
                        <option>Value 4</option>
                        <option>Value 5</option>
                    </CustomInput>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleCustomSelectDisabled">Custom Select Disabled</Label>
                    <CustomInput type="select" id="exampleCustomSelectDisabled" name="customSelect" disabled>
                        <option value="">Select</option>
                        <option>Value 1</option>
                        <option>Value 2</option>
                        <option>Value 3</option>
                        <option>Value 4</option>
                        <option>Value 5</option>
                    </CustomInput>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleCustomMutlipleSelectDisabled">Custom Multiple Select Disabled</Label>
                    <CustomInput type="select" id="exampleCustomMutlipleSelectDisabled" name="customSelect" multiple disabled>
                        <option value="">Select</option>
                        <option>Value 1</option>
                        <option>Value 2</option>
                        <option>Value 3</option>
                        <option>Value 4</option>
                        <option>Value 5</option>
                    </CustomInput>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleCustomFileBrowser">File Browser</Label>
                    <CustomInput type="file" id="exampleCustomFileBrowser" name="customFile" required />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleCustomFileBrowser">File Browser with Custom Label</Label>
                    <CustomInput type="file" id="exampleCustomFileBrowser" name="customFile" label="Yo, pick a file!" required />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleCustomFileBrowser">File Browser Disabled</Label>
                    <CustomInput type="file" id="exampleCustomFileBrowser" name="customFile" disabled required />
                </FormGroup>
            </Form>
        </div>
    ))