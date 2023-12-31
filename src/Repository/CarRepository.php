<?php

namespace App\Repository;

use App\Entity\Car;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Car>
 *
 * @method Car|null find($id, $lockMode = null, $lockVersion = null)
 * @method Car|null findOneBy(array $criteria, array $orderBy = null)
 * @method Car[]    findAll()
 * @method Car[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CarRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Car::class);
    }

    public function addCar(Car $car)
    {
        $entityManager = $this->getEntityManager();
        $entityManager->persist($car);
        $entityManager->flush();
    }  

    public function updateCar(Car $car, array $newData)
    {
        $car->setName($newData['name']);
        $car->setPrice($newData['price']);
        $car->setMileage($newData['mileage']);
        $car->setYearOfCirculation($newData['yearOfCirculation']);

        $entityManager = $this->getEntityManager();
        $entityManager->flush();
    }
 

    public function removeCar(Car $car)
    {
        $entityManager = $this->getEntityManager();
        $entityManager->remove($car);
        $entityManager->flush();
    }  


//    /**
//     * @return Car[] Returns an array of Car objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('c')
//            ->andWhere('c.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('c.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?Car
//    {
//        return $this->createQueryBuilder('c')
//            ->andWhere('c.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
