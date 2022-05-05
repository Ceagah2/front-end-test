import React, { useState } from 'react';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import cars from '../../mock/cars.json';
import { useNavigate } from 'react-router-dom';
import { TableRow, TableData, TableDataButton } from './styles';

const Cars: React.FC = () => {
  const [carsList, setCarsList] = useState(cars);
  const navigate = useNavigate();

  const removeCar = (id: number) => {
    const confirm = window.confirm('Deseja remover o carro?');
    if (confirm) {
      const newCarsList = carsList.filter((car) => car.id !== id);
      setCarsList(newCarsList);
    }
  }
  const editCar = (id: number) => {
    const car = carsList.find((car) => car.id === id);
    if (car) {
      navigate(`/edit/id=${id}`, { state: car });
    }
  }


  // popular a tabela com os carros do mock
  const RenderCars = (): React.ReactElement[] => {
    return carsList.map((car) => {
      return (
        <>
          <TableRow key={car.id}>
            <TableData>{car.brand}</TableData>
            <TableData>{car.type}</TableData>
            <TableData>{car.year}</TableData>
            <TableData>{car.description}</TableData>
            <TableData>{car.soldOut ? 'Sim' : 'Não'}</TableData>
            <TableData>
              <TableDataButton onClick={() => editCar(car.id)}>
                <EditIcon />
              </TableDataButton>
              <TableDataButton onClick={() => removeCar(car.id)}>
                <DeleteIcon />
              </TableDataButton>
            </TableData>
          </TableRow>
        </>
      );
    }
    );
  }


  return (
    <>
      <TableRow>
        <TableData>
          <span>Marca</span>
        </TableData>
        <TableData>
          <span>Veiculo</span>
        </TableData>
        <TableData>
          <span>Ano</span>
        </TableData>
        <TableData>
          <span>Descrição</span>
        </TableData>
        <TableData>
          <span>Vendido ?</span>
        </TableData>
        <TableData />
      </TableRow>
      {RenderCars && <RenderCars />}
    </>
  );
}

export default Cars;