<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class UserController extends AbstractController
{
    #[Route('/user', name: 'app_user')]
    public function index(): Response
    {
        return $this->render('user/index.html.twig', [
            'controller_name' => 'UserController',
        ]);
    }

    #[Route('/login', name: 'app_login')]
    public function login(): Response
    {
        $userId = "123";
        return $this->render('react/login.html.twig', [
            'controller_name' => 'UserController',
            'userId' => $userId,
        ]);
    }

    #[Route('/profile', name: 'app_profile')]
    public function profile(): Response
    {
        $userId = "123";
        return $this->render('react/profile.html.twig', [
            'controller_name' => 'UserController',
            'userId' => $userId,
        ]);
    }
}
