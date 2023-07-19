<?php

namespace App\Controller;

use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class UserController extends AbstractController
{
    #[Route('/user', name: 'app_user')]
    public function index( UserRepository $userRepo): Response
    {
        $users = $userRepo -> findAll();
        return $this->render('user/index.html.twig', [
            'controller_name' => 'UserController',
            'users' => $users,
        ]);
    }

    #[Route('/user/{email)', name: 'app_user_email')]
    public function show( UserRepository $userRepo, $email): Response
    {
        $user = $userRepo -> find($email);
        dump($user);
        return $this->render('user/index.html.twig', [
            'controller_name' => 'UserController',
            'user' => $user,
        ]);
    }

    #[Route('/login', name: 'app_login')]
    public function login(): Response
    {
        $user = 'Hello world';

        return $this->render('react/login.html.twig', [
            'controller_name' => 'UserController',
            'user' => $user
        ]);
    }

    #[Route('/profile', name: 'app_profile')]
    public function profile(): Response
    {
        return $this->render('react/profile.html.twig', [
            'controller_name' => 'UserController',
        ]);
    }
}
