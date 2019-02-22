import React from 'react';
import { Container, Header, Icon, Step } from 'semantic-ui-react';
import Login from '../Login/login';
import './LandingPage.scss';
import ProductList from '../../containers/ProductList/ProductList';

const LandingPage = () => {
  return (
    <>
      <div className="main">
        <div>
          <img scr="" alt="" />
        </div>
        <div>
          <Container textAlign="center">
            <Header text-alighn="center" size="huge">
              Store Manger
            </Header>
            <div className="jumbotron">
              <Header as="h1">Welcome to Store Manager</Header>
              <Header as="h3">
                Take control over managing all your product inventory and keep
                track of sales
              </Header>
              <Login size="large" />
            </div>
          </Container>
        </div>
      </div>
      <section className="container-section">
        <Container textAlign="center">
          <Header text-alighn="center" size="huge">
            How it works
          </Header>
          <Step.Group stackable="tablet">
            <Step>
              <Icon name="sign-in" />
              <Step.Content>
                <Step.Title>Login</Step.Title>
                <Step.Description>Sign into your account</Step.Description>
              </Step.Content>
            </Step>
            <Step>
              <Icon name="shopping cart" />
              <Step.Content>
                <Step.Title>Select Products</Step.Title>
                <Step.Description>
                  Choose products you want to sell
                </Step.Description>
              </Step.Content>
            </Step>
            <Step>
              <Icon name="money" />
              <Step.Content>
                <Step.Title>Create Sale</Step.Title>
                <Step.Description>
                  Create Sale order for products
                </Step.Description>
              </Step.Content>
            </Step>
          </Step.Group>
          <Header as="h3">
            Its that simple. Sign in and start using it now
          </Header>
          <Login size="small" />
        </Container>
      </section>
    </>
  );
};

export default LandingPage;
