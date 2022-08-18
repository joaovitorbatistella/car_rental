import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import Table from '../../components/Table';
import Header from '../../components/Header';

export default function Brands() {
    const [ brands, setBrands ] = useState({
      headers:[
        {key:1,value:'ID'},
        {key:2,value:'Name'},
        {key:3,value:'Created At'},
        {key:4,value:'Updated At'},
      ],
      data: []
    });
    useEffect(() => {
        api.get('brands/list')
          .then( response => {
            setBrands(
              {
                headers:[
                  {key:1,value:'ID'},
                  {key:2,value:'Name'},
                  {key:3,value:'Created At'},
                  {key:4,value:'Updated At'},
                ],
                data: response.data.map((brand, idx) => {
                  return {key:brand.brand_id, value:Object.values(brand)}
                })
              }
            );
        })
    }, []);
  return (
    <>
        <Header title={'Brands'} service={'brand'}/>
        <Table data={brands} service={'brand'}/>
    </>
  );
}