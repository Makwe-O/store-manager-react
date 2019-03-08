import React from 'react';
import { Image, Header } from 'semantic-ui-react';
import moment from 'moment';

const HeaderContent = () => {
  return (
    <>
      <div className="navStyle">
        <div>
          <Image
            src="https://res.cloudinary.com/dnavbc7ny/image/upload/v1552002413/Screen_Shot_2019-03-08_at_12.46.24_AM_czpjnn.png"
            size="large"
          />
        </div>
        <Header as="h3">{moment().format('LL')}</Header>
      </div>
    </>
  );
};

export default HeaderContent;
