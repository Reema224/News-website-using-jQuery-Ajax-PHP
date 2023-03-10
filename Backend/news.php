<?php
header('Access-Control-Allow-Origin: *');
include('connect.php');
$query = $conn->prepare('SELECT * FROM news');
$query->execute();
$array=$query->get_result();
$response=[];
while ($news= $array->fetch_assoc()) {
    $response[]=$news;
}
echo json_encode($response);
?>