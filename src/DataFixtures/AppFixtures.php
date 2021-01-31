<?php

namespace App\DataFixtures;

use App\Entity\Document;
use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Serializer\Encoder\EncoderInterface;

class AppFixtures extends Fixture
{
    private $encoder;

    public function __construct(UserPasswordEncoderInterface $encoder)
    {
        $this->encoder = $encoder;
    }

    public function load(ObjectManager $manager)
    {
        $faker = Factory::create("fr_FR");

        for ($i = 0; $i < 10; $i++) {
            $user = new User();

            $user->setEmail($faker->email)
                ->setPassword($this->encoder->encodePassword($user, "password"))
                ->setFirstName($faker->firstName)
                ->setLastName($faker->lastName);

            $manager->persist($user);
        }

        for ($j = 0; $j < 12; $j++) {
            $document = new Document();

            $document->setName($faker->jobTitle)
                ->setType($faker->text());

            $manager->persist($document);
        }


        $manager->flush();
    }
}
