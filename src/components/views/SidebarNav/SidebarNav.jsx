import React from 'react';
import { Icon, Menu, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import './SidebarNav.scss';
import * as loginActions from '../../../actions/login/loginAction';

export const SidebarNav = ({ navOption, logout, history }) => {
  const handleLogout = async e => {
    e.preventDefault();
    await logout();
    history.push('/');
  };

  const imgStyle = {
    margin: '60px'
  };

  return (
    <>
      <div style={imgStyle}>
        <Image
          src="https://res.cloudinary.com/dnavbc7ny/image/upload/v1552002460/Screen_Shot_2019-03-08_at_12.47.18_AM_uysijs.png"
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
            id="logout"
          >
            <Menu.Item as="div">
              <Icon name="log out" />
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

          <NavLink activeClassName="is-active" to="/cart" exact>
            <Menu.Item as="div">
              <Icon name="shopping cart" />
              Cart
            </Menu.Item>
          </NavLink>

          <NavLink
            activeClassName="is-active"
            to="/"
            onClick={handleLogout}
            exact
          >
            <Menu.Item as="div">
              <Icon name="log out" />
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
