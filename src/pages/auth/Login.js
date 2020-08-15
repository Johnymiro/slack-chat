import React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
} from "semantic-ui-react";
import { Link } from "react-router-dom";

const LoginForm = () => (
  <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as="h1" color="teal" textAlign="center">
        <div style={{ display: "flex", justifyContent: "center" }}>Login</div>
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

          <Button color="teal" fluid size="large">
            Login
          </Button>
        </Segment>
      </Form>
      <Message>
        New to us? <Link to="/auth/register">Register</Link>
      </Message>
      <Message>
        Forgot password?{" "}
        <Link to="/auth/forgot-password">password</Link>
      </Message>
    </Grid.Column>
  </Grid>
);

export default LoginForm;
