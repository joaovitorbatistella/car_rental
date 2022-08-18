import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { useNavigate } from "react-router-dom";
import Header from '../../components/Header';

export default function Home() {
    const navigate = useNavigate();

    const [chassis, setChassis] = useState('');
    const [plate_number, setPlateNumber] = useState('');
    const [color, setColor] = useState('');
    const [car_year, setCarYear] = useState('');
    const [fuel_type, setFuelType] = useState('');
    const [door_number, setDoorNumber] = useState('');
    const [mileage, setMileage] = useState('');
    const [renavam, setRenavam] = useState('');
    const [rental_price, setRentalPrice] = useState('');
    const [model_id, setModelId] = useState('');

    const handleNewCar = async (e) => {
        e.preventDefault()

        const data = {
            chassis,
            plate_number,
            color,
            car_year,
            fuel_type,
            door_number,
            mileage,
            renavam,
            rental_price,
            model_id
        };

        try{
            let response = await api.post('cars', data)
            if(response.data.success) {
                alert('Carro chassis nº '+response.data.id+' cadastrado com sucesso!')
                navigate("/cars");
            } else {
                alert('Erro ao cadastrar carro.')
            }

        } catch (err){
            alert('Erro ao cadastrar caso, tente novamente.')
        }

    }

  return (
    <>
        <Header />
        <div class="divForm">
            <h1>Formuário de cadastro de carros</h1>
            <form onSubmit={handleNewCar}>
                <input
                    placeholder="chassis"
                    value={chassis}
                    onChange={e => setChassis(e.target.value)}
                />
                <br/>
                <input
                    placeholder="plate_number"
                    value={plate_number}
                    onChange={e => setPlateNumber(e.target.value)}
                />
                <br/>
                <input
                    placeholder="color"
                    value={color}
                    onChange={e => setColor(e.target.value)}
                />
                <br/>
                <input
                    placeholder="car_year"
                    value={car_year}
                    onChange={e => setCarYear(e.target.value)}
                />
                <br/>
                <input
                    placeholder="fuel_type"
                    value={fuel_type}
                    onChange={e => setFuelType(e.target.value)}
                />
                <br/>
                <input
                    placeholder="door_number"
                    value={door_number}
                    onChange={e => setDoorNumber(e.target.value)}
                />
                <br/>
                <input
                    placeholder="mileage"
                    value={mileage}
                    onChange={e => setMileage(e.target.value)}
                />
                <br/>
                <input
                    placeholder="renavam"
                    value={renavam}
                    onChange={e => setRenavam(e.target.value)}
                />
                <br/>
                <input
                    placeholder="model_id"
                    value={model_id}
                    onChange={e => setModelId(e.target.value)}
                />
                <br/>
                <input
                    placeholder="rental_price"
                    value={rental_price}
                    onChange={e => setRentalPrice(e.target.value)}
                />
                <br/>
                <br/>
                <button class="button" type="submit">Cadastrar</button>
            </form>
        </div>
    </>
  );
}