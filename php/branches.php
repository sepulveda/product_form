<?php
    include 'connection_string.php';
   
    
    $connection = pg_pconnect($conn_string);
    if (!$connection) {
        echo "An error occurred.";
        exit;
    }
    $warehouse_id = $_GET['warehouse'];

    $result = pg_query($connection, "SELECT * FROM osj_schema.branch where id_warehouse=$warehouse_id");
    if (!$result) {
        echo "An error occurred.";
    exit;
    }else{
        echo "<option value=''>Seleccione una sucursal...</option>";
        while ($row = pg_fetch_row($result)) {
            echo "<option value=$row[0]>$row[1]</option>";
        
        };
    }
    

?>