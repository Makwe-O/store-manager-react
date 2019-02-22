import React from 'react';
import { Icon, Menu } from 'semantic-ui-react';

const SidebarNav = () => {
  return (
    <>
      <Menu.Item as="a">
        <Icon name="home" />
        Products
      </Menu.Item>
      <Menu.Item as="a">
        <Icon name="gamepad" />
        Add Product
      </Menu.Item>
      <Menu.Item as="a">
        <Icon name="camera" />
        Add Attendant
      </Menu.Item>
      <Menu.Item as="a">
        <Icon name="camera" />
        Sales Record
      </Menu.Item>
      <Menu.Item as="a">
        <Icon name="camera" />
        Logout
      </Menu.Item>
    </>
  );
};

export default SidebarNav;
