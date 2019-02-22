import React from 'react';
import { Message } from 'semantic-ui-react';

const SuccessMessage = ({ message }) => {
  return <Message negative content={message} />;
};

export default SuccessMessage;
