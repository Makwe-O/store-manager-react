import React from 'react';
import { Image, Header } from 'semantic-ui-react';
import moment from 'moment';

const HeaderContent = () => {
  return (
    <>
      <div className="navStyle">
        <div>
          <Image
            src="https://res.cloudinary.com/dnavbc7ny/image/upload/v1551952415/logo_g7cllm.png"
            size="small"
          />
        </div>
        <Header as="h2">{moment().format('LL')}</Header>
      </div>
    </>
  );
};

export default HeaderContent;
