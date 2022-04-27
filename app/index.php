<?php

require_once "Classes/PDOFactory.php";
require_once "Classes/Blog.php";
require_once "Classes/User.php";
require_once "Classes/TokenHelper.php";

header('Access-Control-Allow-Origin: http://localost:3000');

// préciser ce que l'on renvoie au navigateur :
header('Content-Type: application/json');

$pdo = (new PDOFactory())->getPdo();

$query = "SELECT * FROM User INNER JOIN Blog ON Blog.authorId = User.id ORDER BY `date` DESC";
$request = $pdo->query($query);
$request->setFetchMode(PDO::FETCH_ASSOC);

$result = [];

foreach ($request->fetchAll() as $post)
{
    $result[] = [
        'id' => $post['id'],
        'date' => $post['date'],
        'title' => $post['title'],
        'conten' => $post['content'],
        'author' => $post['username']
    ];
}

echo json_encode($result);