import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SecondHand = (props) => {
  const [carData, setCarData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/api/cars')
      .then(response => {
        setCarData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Une erreur s\'est produite lors de la récupération des données des voitures :', error);
        setLoading(false);
      });
  }, []);

  return (
    <main>
      <h1>Test Title</h1>
      {loading ? (
        <p>Chargement en cours...</p>
      ) : (
        <ul>
          {carData.map(car => (
            <li key={car.id}>{car.make} - {car.model}</li>
          ))}
        </ul>
      )}
    </main>
  );
};

export default SecondHand;
