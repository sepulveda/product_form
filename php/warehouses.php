<?php
    include 'connection_string.php';

    $connection = pg_pconnect($conn_string);
    if (!$connection) {
        echo "An error occurred.";
        exit;
    }
    $result = pg_query($connection, "SELECT * FROM osj_schema.warehouse");
    if (!$result) {
        echo "An error occurred.";
    exit;
    }else{
        echo "<option value=''>Seleccione una bodega...</option>";
        while ($row = pg_fetch_row($result)) {
            echo "<option value=$row[0]>$row[1]</option>";
        
        };
    }
    

?>