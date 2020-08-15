import React, { Component } from "react";
import { Input, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class MenuExampleSecondary extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  };

  render() {
    const { activeItem } = this.state;

    return (
      <div style={{ padding: "0 17px 0 17px" }}>
        <Menu secondary>
          <Link to="/chat">
            <Menu.Item
              name="home"
              active={activeItem === "home"}
              onClick={this.handleItemClick}
            />
          </Link>
          <Link to="/private-message">
            <Menu.Item
              name="Private Messages"
              active={activeItem === "Private Messages"}
              onClick={this.handleItemClick}
            />
          </Link>
          <Link to="/profile">
            <Menu.Item
              name="profile"
              active={activeItem === "profile"}
              onClick={this.handleItemClick}
            />
          </Link>
          <Menu.Menu position="right">
            <Link to="/auth">
              <Menu.Item
                name="Login"
                active={activeItem === "logout"}
                onClick={this.handleItemClick}
              />
            </Link>
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}
