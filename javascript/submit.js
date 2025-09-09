
function submitProduct(object){


    const xhttp = new XMLHttpRequest();
    xhttp.open("POST", "php/submit.php");
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.onload = function() {
        if(this.responseText=='duplicate error'){
            alert("El código del producto ya está registrado.")
        }
        if(this.responseText=='An error occurred.'){
            alert("Ocurrió un error, intente nuevamente.")
        }
        if(this.responseText=='success!'){
            alert("Producto registrado correctamente.")
        }
        
    }
    xhttp.send("data="+JSON.stringify(object));
  

}