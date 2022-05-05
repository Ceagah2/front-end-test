import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../Components/Button';
import { colors } from '../../../Themes/theme';
import {
  Container,
  Content,
  Title,
  EditForm,
  InputGroup,
  InputTextArea,
  Label,
  Input,
  TextArea,
  ButtonContainer,
} from './styles';

interface IState {
  brand: string;
  type: string;
  year: number;
  description: string;
  soldOut: boolean;
  id: number;
}

const EditCar = (state: IState): React.ReactElement => {
  const [car, setCar] = useState({
    brand: '',
    type: '',
    year: 0,
    description: '',
    soldOut: false,
    id: 0,
  });
  const navigate = useNavigate();
  const { brand, type, year, description, soldOut, id } = car;
  console.log(state);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setCar({ ...car, [event.target.name]: event.target.value });
  }

  const handleTextAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setCar({ ...car, [event.target.name]: event.target.value });
  }
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setCar({ ...car, [event.target.name]: event.target.checked });
  }

  const handleSubmit = () => {
    setTimeout(() => {
      navigate('/');
    }
      , 2000);
    alert('Carro alterado com sucesso!');
    const confirm = window.confirm('Deseja retornar a lista de carros?');
    if (confirm) {
      navigate('/questionFive');
    }
  }


  const handleCancel = (): void => {
    navigate('/questionFive');
  }


  return (
    <Container>
      <Content>
        <Title>Editar Carro</Title>
        <EditForm>
          <InputGroup>
            <Label>
              Marca
            </Label>
            <Input type="text" name="brand" value={brand} onChange={handleChange} />
          </InputGroup>
          <InputGroup>
            <Label>
              Veiculo
            </Label>
            <Input type="text" name="type" value={type} onChange={handleChange} />
          </InputGroup>
          <InputGroup>
            <Label>
              Ano
            </Label>
            <Input type="number" name="year" value={year} onChange={handleChange} />
          </InputGroup>
          <InputTextArea>
            <Label>
              Descrição do carro.
            </Label>
            <TextArea name="description" value={description} onChange={handleTextAreaChange} rows={20} cols={100} />
          </InputTextArea>
          <InputGroup>
            <Label>Vendido</Label>
            <input type="checkbox" name="soldOut" onChange={handleCheckboxChange} />
          </InputGroup>
          <ButtonContainer>
            <Button width='30%' onClick={handleSubmit}>Salvar</Button>
            <Button width='30%' backgroundColor={colors.pink} onClick={handleCancel}>Cancelar</Button>
          </ButtonContainer>
        </EditForm>
      </Content>
    </Container>
  );
}
export default EditCar;
