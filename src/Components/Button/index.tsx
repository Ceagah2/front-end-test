import React from 'react';

import { Container } from './styles';

interface IProps {
  children: React.ReactNode;
  onClick: () => void;
  backgroundColor?: string;
  color?: string;
  width?: string;
}

const Button = (props: IProps) => {
  return (
    <Container onClick={props.onClick} backgroundColor={props.backgroundColor} color={props.color} width={props.width}>
      {props.children}
    </Container>
  );
}

export default Button;