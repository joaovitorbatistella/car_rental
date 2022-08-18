import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

export default function Table({ data, service }) {
  const navigate = useNavigate();

  const handleDelete = (id) => {
    if(service != 'car') {
      window.alert("Funcionalidade indisponível para " + service)
      return 0;
    }
    if (window.confirm('Você deseja deletar este '+service+'?')) {
      api.delete(service+'s/'+id)
      .then(response => {
        window.location.reload(false);
      })
    }
  }

  return (
    <>
      <div class="divTable">
        <table>
            <tr>
              {   
                data.headers.map(header => (
                    <th key={header.key}>{header.value}</th>
                ))
              }
            </tr>

            
              {   
                data.data.map(d => (
                  <tr key={d.key}>
                    {
                    d.value.map((dt,idx)=>(
                      <td key={idx+1}>{dt}</td>
                    ))
                    }
                    <td key="-1"><button class="button" onClick={() => handleDelete(d.key)} type="submit">Deletar</button></td>
                  </tr>
                ))
                
              }
            
              
          </table>
      </div>
    </>
  );
}