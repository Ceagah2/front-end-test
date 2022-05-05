import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Question from '../../Components/Question';
import Button from '../../Components/Button';
import Cars from '../../Components/Cars';
import CarsList from '../../mock/cars.json';
import { colors } from '../../Themes/theme';


import {
  Container,
  Content,
  QuestionText,
  Footer,
} from './styles';

interface ICars {
  brand: string;
  type: string;
  year: number;
  description: string;
  soldOut: boolean;
}

const Five: React.FC = () => {
  const [cars, setCars] = useState<ICars[]>(CarsList);
  const navigate = useNavigate();
  console.table(cars);

  return (
    <Container>
      <Question questionNumber={5} questionTitle='Consumo de API'>
        <Content>
          <QuestionText>
            Considerando que uma API foi criada para que você possa fazer requisições a ela,segue abaixo um pequeno
            sistema, onde você pode incluir, remover, alterar e consultar automóveis.
          </QuestionText>
          <Tabs>
            <TabList>
              <Tab>Consultar todos os carros</Tab>
              <Tab>Incluir novo carro</Tab>
            </TabList>
            <TabPanel>
              <h2>Consultando todos os carros</h2>
              <Cars />
            </TabPanel>
            <TabPanel>
              <h2>Inserindo novo carro</h2>
            </TabPanel>
          </Tabs>
        </Content>

      </Question>
      <Footer>
        <Button onClick={() => navigate('/finish')}>
          Finito!
        </Button>
      </Footer>
    </Container>
  );
};

export default Five;