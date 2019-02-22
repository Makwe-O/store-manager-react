import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

const VerticalCard = ({ image, productName, description }) => {
  return (
    <>
      <Card>
        <Image src={image} />
        <Card.Content>
          <Card.Header>{productName}</Card.Header>
          <Card.Description>{description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="user" />
            22 Friends
          </a>
        </Card.Content>
      </Card>
    </>
  );
};

export default VerticalCard;
