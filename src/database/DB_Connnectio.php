<?php

//Create a connection
$conn = mysqli_connect('DB_HOST', 'DB_USER', 'DB_PASS', 'DB_NAME');

//Check connection
if(mysqli_connect_errno()){
    // Connection failed
    echo 'Faild to connect MYSQL '. mysqli_connect_errno();
}

?>