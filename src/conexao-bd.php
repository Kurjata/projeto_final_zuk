<?php
try{
$pdo = new PDO('mysql:host=localhost;dbname=zuk', 'root', 'devfull');
}catch(PDOException $e){
    echo "Error: ".$e->getMessage();
}

?>