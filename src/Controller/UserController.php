<?php

namespace App\Controller;

use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

class UserController extends AbstractController
{
    #[Route('/api/users', name: 'api_users')]
    public function index( UserRepository $userRepo, SerializerInterface $serializer): Response
    {
        $users = $userRepo -> findAll();
        
        $jsonData = $serializer -> serialize($users, 'json');

        return new Response($jsonData, 200, [
            'Content-Type' => 'application/json'
        ]);
    }

    #[Route('/user/{email}', name: 'user_details')]
    public function show(string $email, UserRepository $userRepository): Response
    {
        $user = $userRepository->findOneBy(['email' => $email]);

        if (!$user) {
            return new Response(json_encode(['error' => 'Utilisateur non trouvé']), 404, ['Content-Type' => 'application/json']);
        }

        $userData = [
            'email' => $user->getEmail(),
            'prenom' => $user->getFirstName(),
            'nom' => $user->getLastName(),
            'phone' => $user->getPhone(),
        ];

        return new Response(json_encode($userData), 200, ['Content-Type' => 'application/json']);
    }


    #[Route('/login', name: 'app_login')]
    public function login(): Response
    {
        return $this->render('react/login.html.twig');
    }

    #[Route('/profile', name: 'app_profile')]
    public function profile(): Response
    {
        return $this->render('react/profile.html.twig', [
            'controller_name' => 'UserController',
        ]);
    }
}
