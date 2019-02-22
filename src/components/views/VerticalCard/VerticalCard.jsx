import React from 'react';
import { Card, Label, Image, Button, Icon } from 'semantic-ui-react';
import './VerticalCard.scss';

const VerticalCard = ({ name, image, price, quantity, category }) => {
  return (
    <>
      <Card>
        <Image src={image} className="vertical-card-image" />
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Description>
            Price:{' '}
            <Label as="a" tag>
              ${price}
            </Label>
          </Card.Description>
          <Card.Description>
            Cartogory:{' '}
            <Label as="a" tag>
              {category}
            </Label>
          </Card.Description>
          <Card.Content extra>Quantity:{quantity}</Card.Content>
        </Card.Content>

        <Button animated color="blue">
          <Button.Content visible>Add To Cart</Button.Content>
          <Button.Content hidden>
            <Icon name="arrow right" />
          </Button.Content>
        </Button>
      </Card>
    </>
  );
};

export default VerticalCard;
