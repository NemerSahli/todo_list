import React from 'react';
import { Col, FormGroup, Label, Input, FormFeedback } from 'reactstrap';

export default function InputGroup(props) {
  return (
    <FormGroup row>
      <Label for={props.name} sm={2}>
        {props.label}:
      </Label>
      <Col sm={10}>
        <Input
          id={props.id}
          key={props.key}
          type={props.inputType}
          name={props.name}
          invalid={props.invalid}
          // value={props.defaultValue}
          defaultValue={props.defaultValue}
          placeholder={props.placeholder}
          onChange={props.onChangeHandler}
        />
        <FormFeedback>
          {props.label} is required! {props.max}
        </FormFeedback>
      </Col>
    </FormGroup>
  );
}
