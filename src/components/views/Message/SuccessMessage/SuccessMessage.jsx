import React from 'react';
import { Message } from 'semantic-ui-react';
const SuccessMessage = ({ message }) => {
  return <Message success content={message} />;
};

export default SuccessMessage;
