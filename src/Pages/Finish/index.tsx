import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../Components/Button';
import Question from '../../Components/Question';
import { colors } from '../../Themes/theme';


import {
  Container,
  Content,
  QuestionText,
  List,
  ListItem,
} from './styles';


const Greetings: React.FC = () => {
  return (
    <Container>
      <Question questionTitle='Concluido'>
        <Content>
          <QuestionText>
            Considerações finais.
            Bom, terminado todas as questões da forma que eu interpretei o teste. Foquei em criar um front end rápido e intuitivo
            para todas as questões, já que se fizesse somente a lógica, todos os resultados seriam impressos no console,
            não seria possível ver os resultados sem utilizar as development tools.<br />
            A questão sobre backend, eu optei por criar um arquivo mock, para demonstrar minhas habilidades em consumo de api,
            bem como a sua criação de forma manual, pois se eu focasse em criar todo um backend, o tempo não seria suficiente, pois
            meu conhecimento em backend é bem limitado.
            Dito isso, segue agora a lista de libs que eu utilizei para esse projeto:
            <List>
              <ListItem>React</ListItem>
              <ListItem>React-router-dom</ListItem>
              <ListItem>Styled-components</ListItem>
              <ListItem>Mui-icons</ListItem>
              <ListItem>React tabs</ListItem>
            </List>
          </QuestionText>
        </Content>
      </Question>

    </Container>
  );
}

export default Greetings;