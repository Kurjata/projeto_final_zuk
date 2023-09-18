<?php

header("Content-Type: application/json");

require "src/conexao-bd.php";

$sql = $pdo->query("SELECT nome, descricao, tipo  FROM produtos");
if($sql->rowCount() > 0){
    echo json_encode($sql->fetchAll());
}

?>