import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SecondHand = (props) => {
  const [carData, setCarData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [carName, setCarName] = useState("");
  const [carPrice, setCarPrice] = useState(0);
  const [carMileage, setCarMileage] = useState(0);
  const [carYear, setCarYear] = useState(0);

  const handleAddCar = (e) => {
    e.preventDefault();

    const newCarData = {
        name: carName,
        price: carPrice,
        mileage: carMileage,
        yearOfCirculation: carYear,
    };

    if (!carName || !carPrice || !carMileage || !carYear) {
      alert('Merci de remplir tous les champs');
      return;
    }

    axios.post('/car/add', newCarData)
        .then(response => {
            window.location.reload();
        })
        .catch(error => {
            console.error('Une erreur s\'est produite lors de l\'ajout de la voiture :', error);
        });
};

const handleRemoveCar = (id) => {
  axios.delete(`/car/remove/${id}`)
    .then(response => {
      // Mettez à jour l'état local en filtrant la voiture supprimée
      setCarData(prevCarData => prevCarData.filter(car => car.id !== id));
    })
    .catch(error => {
      console.error('Une erreur s\'est produite lors de la suppression de la voiture :', error);
    });
};

const handleUpdateCar = (id) => {
  
};

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
            <li 
            key={car.id}>{car.name} 
            - {car.price} € 
            - {car.mileage} km 
            - année de circulation : {car.yearOfCirculation}
            <button onClick={() => handleUpdateCar(car.id)}>Modifier</button>
            <button onClick={() => handleRemoveCar(car.id)}>Supprimer</button>
            </li>
          ))}
        </ul>
      )}
      
      <form>
        <label htmlFor=""></label>
        <input type="text" placeholder='Nom' onChange={(e) => setCarName(e.target.value)}/> <br/>
        <input type="text" placeholder='Prix' onChange={(e) => setCarPrice(e.target.value)}/> <br/>
        <input type="text" placeholder='Kilométrage' onChange={(e) => setCarMileage(e.target.value)}/> <br/>
        <input type="text" placeholder='Année de circulation' onChange={(e) => setCarYear(e.target.value)}/>
        <button onClick={handleAddCar}>Ajouter</button>
      </form>
    </main>
  );
};

export default SecondHand;
