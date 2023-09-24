<?php

namespace App\Controller;

use App\Repository\CarRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
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
}
