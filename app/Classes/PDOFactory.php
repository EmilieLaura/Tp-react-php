<?php

class PDOFactory
{
    private PDO $pdo;

    public function __construct()
    {
        $this->pdo = new PDO("mysql:host=db;dbname=tpfetch_react", "root", "example");
    }

    public function getPdo(): PDO
    {
        return $this->pdo;
    }
}