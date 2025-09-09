<?php
    include 'connection_string.php';

    $data = $_POST["data"];

    $decoded_json = json_decode($data);
    $product_code = $decoded_json->product_code;
    $product_name = $decoded_json->product_name;
    $product_branch = $decoded_json->product_branch;
    $product_currency = $decoded_json->product_currency;
    $product_price = $decoded_json->product_price;
    $product_materials = $decoded_json->product_materials;
    $product_description = $decoded_json->product_description;

   $connection = pg_pconnect($conn_string);

    if (!$connection) {
        echo "An error occurred.";
        exit;
    }
    $query = "INSERT INTO osj_schema.product VALUES ( '$product_code', '$product_name', '$product_price', ARRAY[$product_materials], '$product_description', '$product_branch', '$product_currency');";
    if (pg_send_query($connection,$query)){

        $res=pg_get_result($connection);

        if ($res) {
            $state = pg_result_error_field($res, PGSQL_DIAG_SQLSTATE);
            if ($state==0) {
                echo "success!";
            // success
            }
            else {
            // some error happened
            if ($state=="23505") { // unique_violation
                echo "duplicate error";
            }
            else {
                echo "An error occurred.";
            // process other errors
            }
            }
        }  
    }



?>