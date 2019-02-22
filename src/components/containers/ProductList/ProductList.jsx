import React from 'react';
import { Grid, Divider, Header } from 'semantic-ui-react';
import VerticalCard from '../../views/VerticalCard/VerticalCard';

const ProductList = () => (
  <>
    <Header size="large">Products</Header>
    <Divider />
    <div>
      <Grid>
        <Grid.Column mobile={16} tablet={8} computer={4}>
          <VerticalCard />
        </Grid.Column>
        <Grid.Column mobile={16} tablet={8} computer={4}>
          <VerticalCard />
        </Grid.Column>
        <Grid.Column mobile={16} tablet={8} computer={4}>
          <VerticalCard />
        </Grid.Column>
        <Grid.Column mobile={16} tablet={8} computer={4}>
          <VerticalCard />
        </Grid.Column>
        <Grid.Column mobile={16} tablet={8} computer={4}>
          <VerticalCard />
        </Grid.Column>
      </Grid>
    </div>
  </>
);

export default ProductList;
