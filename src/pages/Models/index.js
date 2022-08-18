import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import Table from '../../components/Table';
import Header from '../../components/Header';

export default function Models() {
    const [ models, setModels ] = useState({
      headers:[
        {key:1,value:'ID'},
        {key:2,value:'Name'},
        {key:3,value:'Created At'},
        {key:4,value:'Updated At'},
      ],
      data: []
    });
    useEffect(() => {
        api.get('models/list')
          .then( response => {
            setModels(
              {
                headers:[
                  {key:1,value:'ID'},
                  {key:2,value:'Name'},
                  {key:3,value:'Marca'},
                  {key:4,value:'Created At'},
                  {key:5,value:'Updated At'},
                ],
                data: response.data.map((model, idx) => {
                  return {key:model.model_id, value:Object.values(model)}
                })
              }
            );
        })
    }, []);
  return (
    <>
        <Header title={'Models'} service={'model'}/>
        <Table data={models} service={'model'}/>
    </>
  );
}