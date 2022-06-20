import React from "react";
import { Col, Container, Row } from "react-bootstrap";
let CONST = {
  desktop: 1,
  mobile: 2,
  tab: 3,
};

function Child(props) {
  let deviceType = props.deviceType;
  return (
    <Container>
      <Row>
        {deviceType.includes(CONST.mobile) ? (
          <>
            <Col sm>1</Col> <Col sm>2</Col> <Col sm>3</Col>
          </>
        ) : (
          <>
            <Col md>1</Col> <Col md>2</Col> <Col md>3</Col>
          </>
        )}
      </Row>
    </Container>
  );
}
export default Child;
