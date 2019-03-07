import React from 'react';
import { Icon, Menu } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import { Image } from 'semantic-ui-react';
import './SidebarNav.scss';
import * as loginActions from '../../../actions/login/loginAction';

const SidebarNav = ({ navOption, logout, history }) => {
  const handleLogout = async e => {
    e.preventDefault();
    await logout();
    history.push('/');
  };

  const imgStyle = {
    marginBottom: '20px'
  };

  return (
    <>
      <div style={imgStyle}>
        <Image
          src="https://res.cloudinary.com/dnavbc7ny/image/upload/v1551951649/Screen_Shot_2019-03-07_at_10.39.52_AM_epilme.png"
          size="small"
        />
      </div>

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
            onClick={handleLogout}
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

          <NavLink activeClassName="is-active" to="/addsales" exact>
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

          <NavLink
            activeClassName="is-active"
            to="/"
            onClick={handleLogout}
            exact
          >
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

const mapDispatchToProps = {
  logout: loginActions.logout
};
export default connect(
  null,
  mapDispatchToProps
)(withRouter(SidebarNav));
