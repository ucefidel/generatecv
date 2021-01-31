<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AppController extends AbstractController
{
    /**
     * @Route("/", name="app")
     */
    public function index(): Response
    {
        return $this->render('app/index.html.twig', [
            'controller_name' => 'AppController',
        ]);
    }

    /**
     * @Route("/pdf", name="test_pdf")
     */
    public function pdfAction()
    {
        $html = $this->renderView("pdf_test.html.twig");

        $filename = sprintf("test-%s.pdf", date("Y-m-d"));

        return new Response(
            $this->get("knp_snappy.pdf")->getOutputFromHtml($html),
            200,
            [
                "Content-Type" => 'application/pdf',
                "Content-Disposition" => sprintf('attachment; filename="%s"', $filename),
            ]
        );
    }
}