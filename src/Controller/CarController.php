<?php

namespace App\Controller;

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

    #[Route('/api/cars', name: 'api_add_car', methods: ['POST'])]
    public function addCar(Request $request, SerializerInterface $serializer, CarRepository $carRepo): Response
    {
        $jsonData = $request->getContent();
        $car = $serializer->deserialize($jsonData, Car::class, 'json');

        $carRepo->addCar($car);

        return new JsonResponse(['message' => 'Car added'], Response::HTTP_CREATED);
    }
}
