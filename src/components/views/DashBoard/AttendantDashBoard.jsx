import React, { Component } from 'react';
import {
  Button,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar
} from 'semantic-ui-react';
import SidebarNav from '../SIdebarNav/SidebarNav';
import ProductList from '../../containers/ProductList/ProductList';

class AttendantDashBoard extends Component {
  state = { visible: false };

  handleHideClick = () => this.setState({ visible: false });

  handleShowClick = () => this.setState({ visible: true });

  handleSidebarHide = () => this.setState({ visible: false });

  render() {
    const { visible } = this.state;
    return (
      <>
        <div className="full-height">
          <Sidebar.Pushable as={Segment}>
            <Sidebar
              as={Menu}
              animation="overlay"
              icon="labeled"
              inverted
              onHide={this.handleSidebarHide}
              vertical
              visible={visible}
              width="thin"
            >
              <SidebarNav />
            </Sidebar>

            <Sidebar.Pusher dimmed={visible}>
              <Button disabled={visible} onClick={this.handleShowClick}>
                Show sidebar
              </Button>
              <Segment basic>
                <Header as="h3">DashBoard</Header>
                <ProductList />
              </Segment>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </div>
      </>
    );
  }
}

export default AttendantDashBoard;
