import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import Table from '../../components/Table';
import Header from '../../components/Header';

export default function Home() {
    const [ cars, setCars ] = useState({
      headers:[
        {key:1,value:'Chassis'},
        {key:2,value:'Número da Placa'},
        {key:3,value:'Modelo'},
        {key:4,value:'Cor'},
        {key:5,value:'Ano'},
        {key:6,value:'Tipo de Combustível'},
        {key:7,value:'Número de Portas'},
        {key:8,value:'Quilometragem'},
        {key:9,value:'Renavam'},
        {key:10,value:'Valor do aluguel'},
        {key:11,value:'Created At'},
        {key:12,value:'Updated At'},
      ],
      data: []
    })
    useEffect(() => {
        api.get('cars/list')
          .then( response => {
            setCars(
              {
                headers:[
                  {key:1,value:'Chassis'},
                  {key:2,value:'Número da Placa'},
                  {key:3,value:'Modelo'},
                  {key:4,value:'Cor'},
                  {key:5,value:'Ano'},
                  {key:6,value:'Tipo de Combustível'},
                  {key:7,value:'Número de Portas'},
                  {key:8,value:'Quilometragem'},
                  {key:9,value:'Renavam'},
                  {key:10,value:'Valor do aluguel'},
                  {key:11,value:'Created At'},
                  {key:12,value:'Updated At'},
                ],
                data: response.data.map((car, idx) => {
                  return {key:car.chassis, value:Object.values(car)}
                })
              }
            );
        })
    }, []);

  return (
    <>
        <Header title={'Cars'} service={'car'}/>
        <Table data={cars} service={'car'}/>
    </>
  );
}