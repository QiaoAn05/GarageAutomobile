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
}
