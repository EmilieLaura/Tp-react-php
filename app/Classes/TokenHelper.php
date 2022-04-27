<?php

class TokenHelper
{
    /**
     * @throws Exception
     */
    public function generateToken(): string
    {
        // création d'une chaîne aléatoire de 50 caractères
        $bytes = random_bytes(50);
        return bin2hex($bytes);
    }
}