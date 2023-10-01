<?php

namespace App\Controller;

use App\Entity\Car;
use App\Repository\CarRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

class CarController extends AbstractController
{
    #[Route('/secondHand', name: 'app_second_hand')]
    public function index(): Response
    {
        return $this->render('react/secondHand.html.twig');
    }

    #[Route('/api/cars', name: 'api_cars')]
    public function getCars( CarRepository $carRepo, SerializerInterface $serializer): Response
    {
        $cars = $carRepo -> findAll();
        
        $jsonData = $serializer -> serialize($cars, 'json');

        return new Response($jsonData, 200, [
            'Content-Type' => 'application/json'
        ]);
    }

    #[Route('/car/add', name: 'car_add', methods: ['POST'])]
    public function addCar(Request $request, CarRepository $carRepo): Response
    {
        $data = json_decode($request->getContent(), true);

        $name = $data['name'];
        $price = $data['price'];
        $yearOfCirculation = $data['yearOfCirculation'];
        $mileage = $data['mileage'];

        $car = new Car();
        $car->setName($name);
        $car->setPrice($price);
        $car->setYearOfCirculation($yearOfCirculation);
        $car->setMileage($mileage);

        $carRepo->addCar($car, true);    

        return new JsonResponse(['message' => 'Car added'], 201);
    }

    #[Route('/car/remove/{id}', name: 'car_remove_id', methods: ['DELETE'])]
    public function removeCar(CarRepository $carRepo, $id): Response
    {
        $car = $carRepo->find($id);
    
        if (!$car) {
            return new Response("Car not found", 404);
        }
    
        $carRepo->removeCar($car);
    
        return new Response("Car removed successfully");
    }

    #[Route('/car/update/{id}', name: 'car_update', methods: ['PUT'])]
public function updateCar(Request $request, CarRepository $carRepo, $id): Response
{
    $car = $carRepo->find($id);

    if (!$car) {
        return new Response("Car not found", 404);
    }

    // Récupérez les données du formulaire JSON
    $data = json_decode($request->getContent(), true);

    // Utilisez le repository pour mettre à jour la voiture
    $carRepo->updateCar($car, $data);

    return new Response("Car updated successfully");
}

    
}
