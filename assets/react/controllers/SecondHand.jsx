import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SecondHand = (props) => {
    const [carData, setCarData] = useState([]);
    const [loading, setLoading] = useState(true);

    const [carName, setCarName] = useState("");
    const [carPrice, setCarPrice] = useState(0);
    const [carMileage, setCarMileage] = useState(0);
    const [carYear, setCarYear] = useState(0);

    const [updateCarData, setUpdateCarData] = useState({
        id: 0,
        name: "",
        price: 0,
        mileage: 0,
        yearOfCirculation: 0,
    });
    const [isUpdateFormVisible, setUpdateFormVisible] = useState(false);
    const [addCar, setAddCar] = useState(false);

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
                setCarData(prevCarData => prevCarData.filter(car => car.id !== id));
                alert("L'élément a bien été supprimé");
            })
            .catch(error => {
                console.error('Une erreur s\'est produite lors de la suppression de la voiture :', error);
            });
    };

    const handleUpdateFormDisplay = (car) => {
        setUpdateCarData(car);
        setUpdateFormVisible(true);
        setAddCar(false);
    };
    const handleModifyFormDisplay = () => {
        setAddCar(true);
    };

    const handleUpdateCar = () => {
        axios
            .put(`/car/update/${updateCarData.id}`, updateCarData)
            .then(response => {
                setCarData(prevCarData =>
                    prevCarData.map(car =>
                        car.id === updateCarData.id ? updateCarData : car
                    )
                );
                alert("L'élément a bien été modifié");
                setUpdateFormVisible(false);
            })
            .catch(error => {
                console.error('Erreur lors de la mise à jour de la voiture :', error);
            });
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
            <h1>Voitures d'occasion</h1>
            {loading ? (
                <p>Chargement en cours...</p>
            ) : (
                <table className="table table-bordered align-middle">
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Prix (€)</th>
                            <th>Kilométrage (km)</th>
                            <th>Année de circulation</th>
                            <th>Modifier</th>
                            <th>Supprimer</th>
                        </tr>
                    </thead>
                    <tbody>
                        {carData.map(car => (
                            <tr key={car.id}>
                                <td>{car.name}</td>
                                <td>{car.price}</td>
                                <td>{car.mileage}</td>
                                <td>{car.yearOfCirculation}</td>
                                <td>
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => handleUpdateFormDisplay(car)}
                                    >
                                        Modifier
                                    </button>
                                </td>
                                <td>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => handleRemoveCar(car.id)}
                                    >
                                        Supprimer
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

            {isUpdateFormVisible && (
                <form>
                    <h3>Modifier les données de la voiture</h3>
                    <label htmlFor="updateCarName">Nom</label>
                    <input
                        type="text"
                        id="updateCarName"
                        value={updateCarData.name}
                        onChange={(e) =>
                            setUpdateCarData({
                                ...updateCarData,
                                name: e.target.value,
                            })
                        }
                    />
                    <label htmlFor="updateCarPrice">Prix</label>
                    <input
                        type="number"
                        id="updateCarPrice"
                        value={updateCarData.price}
                        onChange={(e) =>
                            setUpdateCarData({
                                ...updateCarData,
                                price: e.target.value,
                            })
                        }
                    />
                    <label htmlFor="updateCarMileage">Kilométrage</label>
                    <input
                        type="number"
                        id="updateCarMileage"
                        value={updateCarData.mileage}
                        onChange={(e) =>
                            setUpdateCarData({
                                ...updateCarData,
                                mileage: e.target.value,
                            })
                        }
                    />
                    <label htmlFor="updateCarYear">Année de circulation</label>
                    <input
                        type="number"
                        id="updateCarYear"
                        value={updateCarData.yearOfCirculation}
                        onChange={(e) =>
                            setUpdateCarData({
                                ...updateCarData,
                                yearOfCirculation: e.target.value,
                            })
                        }
                    />
                    <button onClick={handleUpdateCar}>Mettre à jour</button>
                    <button onClick={() => setUpdateFormVisible(false)}>Annuler</button>
                </form>
            )}
            {!isUpdateFormVisible && (
                <button className='btn btn-success' onClick={handleModifyFormDisplay}>Ajouter</button>
            )}
            {addCar && (
                <form>
                    <label htmlFor="carName">Nom</label>
                    <input
                        type="text"
                        id="carName"
                        placeholder='Nom'
                        value={carName}
                        onChange={(e) => setCarName(e.target.value)}
                    />
                    <label htmlFor="carPrice">Prix</label>
                    <input
                        type="number"
                        id="carPrice"
                        placeholder='Prix'
                        value={carPrice}
                        onChange={(e) => setCarPrice(e.target.value)}
                    />
                    <label htmlFor="carMileage">Kilométrage</label>
                    <input
                        type="number"
                        id="carMileage"
                        placeholder='Kilométrage'
                        value={carMileage}
                        onChange={(e) => setCarMileage(e.target.value)}
                    />
                    <label htmlFor="carYear">Année de circulation</label>
                    <input
                        type="number"
                        id="carYear"
                        placeholder='Année de circulation'
                        value={carYear}
                        onChange={(e) => setCarYear(e.target.value)}
                    />
                    <button onClick={handleAddCar}>Confirmer</button>
                    <button onClick={() => setAddCar(false)}>Annuler</button>
                </form>
            )}
        </main>
    );
};

export default SecondHand;
