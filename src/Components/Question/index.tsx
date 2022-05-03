import React from 'react';

import { Container } from './styles';

interface IProps {
  children: React.ReactNode;
}

const Question = (props: IProps) => {
  return (
    <Container>
      {props.children}
    </Container>
  );
}

export default Question;