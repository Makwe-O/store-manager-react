import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Container, Header } from 'semantic-ui-react';
import './NotFound.scss';

const NotFound = () => {
  return (
    <>
      <Container textAlign="center">
        <Header text-alighn="center" size="huge">
          Store Manger
        </Header>
        <section className="container-section">
          <Image
            src="https://res.cloudinary.com/dnavbc7ny/image/upload/v1549863237/Store%20Manager/undraw_page_not_found_su7k.svg"
            size="huge"
            centered
          />
          <h1>Oops looks like you are lost</h1>
          <Link to="/">Go Home</Link>
        </section>
      </Container>
    </>
  );
};

export default NotFound;
