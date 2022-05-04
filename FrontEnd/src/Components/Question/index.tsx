import React from 'react';

import {
  Container,
  Content,
  TitleHeader,
  QuestionNumber,
  QuestionTitle
} from './styles';

interface IProps {
  questionNumber: number;
  questionTitle: string;
  children: React.ReactNode;
}

const Question = (props: IProps) => {
  return (
    <Container>
      <TitleHeader>
        <QuestionNumber>{props.questionNumber}</QuestionNumber>
        <QuestionTitle>{props.questionTitle}</QuestionTitle>
      </TitleHeader>
      <Content>{props.children}</Content>
    </Container>
  );
}

export default Question;