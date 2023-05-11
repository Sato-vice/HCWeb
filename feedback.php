<?php 
    $dbc = mysqli_connect("localhost", "root", "", "requests");

    $data = json_decode(file_get_contents("php://input"), true);
    $name = $data["name"];
    $number = $data["number"];

    $query = "INSERT INTO requests (f_name, number_f)
        VALUES ('$name', '$number')";

    $result = mysqli_query($dbc, $query);

    http_response_code("201");
    header("Content-type: application/json");
    print json_encode(array("message" => "Request has been sent"));
    
    mysqli_close($dbc);


?>

