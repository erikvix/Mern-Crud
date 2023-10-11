import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ReadComponent() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('/api/items') // Faz uma requisição GET para a rota no backend
      .then(response => {
        setItems(response.data); // Atualiza o estado com os itens recebidos
      })
      .catch(error => {
        console.error('Erro ao buscar itens:', error);
      });
  }, []);

  return (
    <div>
      <h2>Lista de Itens</h2>
      <ul>
        {items.map(item => (
          <li key={item._id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ReadComponent;