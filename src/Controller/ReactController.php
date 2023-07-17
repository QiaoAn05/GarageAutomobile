<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ReactController extends AbstractController
{
    #[Route('/', name: 'app_react')]
    public function index(): Response
    {
        $userId = "123";

        return $this->render('react/index.html.twig', [
            'controller_name' => 'ReactController',
            'userId' => $userId,
        ]);
    }
}