import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, EditForm, Label, Input } from './styles';

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

  // salva as alterações do carro no mock
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const newCarsList = car.map((car: { id: number; }) => {
      if (car.id === id) {
        return car = car;
      }
      return car;
    }
    );
    setCar(newCarsList);
    navigate('/');
  }

  const handleCancel = (): void => {
    navigate('/questionFive');
  }


  return (
    <Container>
      <h1>Editar Carro</h1>
      <EditForm>
        <Label>
          Marca:
          <Input type="text" name="brand" value={brand} onChange={handleChange} />
        </Label>
        <Label>
          Veiculo:
          <Input type="text" name="type" value={type} onChange={handleChange} />
        </Label>
        <Label>
          Ano:
          <Input type="number" name="year" value={year} onChange={handleChange} />
        </Label>
        <Label>
          Descrição:
          <textarea name="description" value={description} onChange={handleTextAreaChange} />
        </Label>
        <Label>
          Vendido:
          <input type="checkbox" name="soldOut" onChange={handleCheckboxChange} />
        </Label>
        <button type="button" onClick={handleSubmit}>Salvar</button>
        <button type="button" onClick={handleCancel}>Cancelar</button>
      </EditForm>
    </Container>
  );
}
export default EditCar;
