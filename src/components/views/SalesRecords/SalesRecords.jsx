import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Button,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
  Container,
  Table,
  Dimmer,
  Loader
} from 'semantic-ui-react';
import SidebarNav from '../SidebarNav/SidebarNav';
import * as salesRecordsActions from '../../../actions/salesRecords/salesRecordsAction';

class SalesRecords extends Component {
  state = { visible: false };

  handleHideClick = () => this.setState({ visible: false });

  handleShowClick = () => this.setState({ visible: true });

  handleSidebarHide = () => this.setState({ visible: false });

  async componentWillMount() {
    this.checkRoleAdmin();
  }

  async componentDidMount() {
    const { getSalesRecords } = this.props;
    getSalesRecords();
  }

  checkRoleAdmin() {
    const { role, history } = this.props;
    if (!role) {
      return history.push('/');
    }
    if (role === 'Attendant') {
      return history.push('/attendant');
    }
  }

  render() {
    const { role } = this.props;
    const { sales_record } = this.props;
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
              <SidebarNav navOption={role} />
            </Sidebar>

            <Container>
              <Sidebar.Pusher>
                <Button disabled={visible} onClick={this.handleShowClick}>
                  Show sidebar
                </Button>
                <Segment basic>
                  <Header as="h2">DashBoard</Header>
                  {sales_record.length === 0 ? (
                    <Segment style={{ height: '50vh' }}>
                      <Dimmer active inverted>
                        <Loader size="massive">Getting things Ready 👍</Loader>
                      </Dimmer>

                      <Image src="/images/wireframe/paragraph.png" />
                    </Segment>
                  ) : (
                    <Table celled padded>
                      <Table.Header>
                        <Table.Row>
                          <Table.HeaderCell>Attendant Name</Table.HeaderCell>
                          <Table.HeaderCell>Product Name </Table.HeaderCell>
                          <Table.HeaderCell>Price</Table.HeaderCell>
                          <Table.HeaderCell>Quantity</Table.HeaderCell>
                          <Table.HeaderCell>Date</Table.HeaderCell>
                        </Table.Row>
                      </Table.Header>

                      <Table.Body>
                        {sales_record.map(sale_record => (
                          <Table.Row key={sale_record.sales_record_id}>
                            <Table.Cell>{sale_record.name}</Table.Cell>
                            <Table.Cell>{sale_record.product_name}</Table.Cell>
                            <Table.Cell textAlign="center">
                              {sale_record.price}
                            </Table.Cell>
                            <Table.Cell>{sale_record.sales_amount}</Table.Cell>
                            <Table.Cell>{sale_record.date}</Table.Cell>
                          </Table.Row>
                        ))}
                      </Table.Body>
                    </Table>
                  )}
                </Segment>
              </Sidebar.Pusher>
            </Container>
          </Sidebar.Pushable>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  const {
    salesRecordsReducer: { sales_record },
    loginReducer: { role }
  } = state;

  return {
    sales_record,
    role
  };
};
const mapDispatchToProps = {
  getSalesRecords: salesRecordsActions.getSalesRecords
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SalesRecords);
