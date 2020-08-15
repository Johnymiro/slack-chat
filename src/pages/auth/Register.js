import React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from "semantic-ui-react";
import { Link } from "react-router-dom";

const Register = () => (
  <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as="h1" color="orange" textAlign="center">
        Register
      </Header>
      <Form size="large">
        <Segment stacked>
          <Form.Input
            fluid
            icon="user"
            iconPosition="left"
            placeholder="E-mail address"
          />
          <Form.Input
            fluid
            icon="lock"
            iconPosition="left"
            placeholder="Password"
            type="password"
          />

          <Form.Input
            fluid
            icon="lock"
            iconPosition="left"
            placeholder="confirm password"
            type="password"
          />
          <Button color="orange" fluid size="large">
            submit
          </Button>
        </Segment>
      </Form>
      <Message>
       <Link to="/auth">Back</Link>
      </Message>
    </Grid.Column>
  </Grid>
);

export default Register;
