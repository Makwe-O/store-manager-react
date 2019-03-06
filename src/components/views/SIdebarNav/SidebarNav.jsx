import React from 'react';
import { Icon, Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import './SidebarNav.scss';

const SidebarNav = ({ navOption }) => {
  return (
    <>
      {navOption === 'Admin' ? (
        <>
          <NavLink activeClassName="is-active" to="/admin" exact>
            <Menu.Item as="div">
              <Icon name="gem" />
              Products
            </Menu.Item>
          </NavLink>

          <NavLink activeClassName="is-active" to="/addProduct" exact>
            <Menu.Item as="div">
              <Icon name="gem" />
              Add Products
            </Menu.Item>
          </NavLink>

          <NavLink activeClassName="is-active" to="/sales" exact>
            <Menu.Item as="div">
              <Icon name="database" />
              Sales Record
            </Menu.Item>
          </NavLink>

          <NavLink activeClassName="is-active" to="/addAttendant" exact>
            <Menu.Item as="div">
              <Icon name="users" />
              Create Attendants
            </Menu.Item>
          </NavLink>

          <NavLink activeClassName="is-active" to="/categories" exact>
            <Menu.Item as="div">
              <Icon name="file outline" />
              Categories
            </Menu.Item>
          </NavLink>

          <NavLink
            className="navstyle"
            activeClassName="is-active"
            to="/"
            exact
          >
            <Menu.Item as="div">
              <Icon name="cogs" />
              Logout
            </Menu.Item>
          </NavLink>
        </>
      ) : (
        <>
          <NavLink activeClassName="is-active" to="/attendant" exact>
            <Menu.Item as="div">
              <Icon name="gem" />
              Products
            </Menu.Item>
          </NavLink>

          <NavLink activeClassName="is-active" to="/1" exact>
            <Menu.Item as="div">
              <Icon name="database" />
              Sales Record
            </Menu.Item>
          </NavLink>

          <NavLink activeClassName="is-active" to="/2" exact>
            <Menu.Item as="div">
              <Icon name="users" />
              Profile
            </Menu.Item>
          </NavLink>

          <NavLink activeClassName="is-active" to="/" exact>
            <Menu.Item as="div">
              <Icon name="users" />
              Logout
            </Menu.Item>
          </NavLink>
        </>
      )}
    </>
  );
};

export default SidebarNav;
