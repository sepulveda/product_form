
function fetchInitialData(){
    getCurrencyData();
    getWarehouseData();
}

function getCurrencyData(){
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    if(this.responseText=='An error occurred.'){
      alert("Ocurrió un error al cargar la información.")
    }else{
      document.getElementById("currency").innerHTML =
      this.responseText;
    }
  }
  xhttp.open("GET", "php/currencies.php");
  xhttp.send(); 
}

function getWarehouseData(){
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    if(this.responseText=='An error occurred.'){
      alert("Ocurrió un error al cargar la información.")
    }else{
      document.getElementById("warehouses").innerHTML =
      this.responseText;
    }
    
  }
  xhttp.open("GET", "php/warehouses.php");
  xhttp.send(); 
}

function getBranchesData(){
    const warehouse_code = document.getElementById("warehouses").value
    if(warehouse_code==''){
        document.getElementById("branches").innerHTML = '<option value="">Seleccione una sucursal...</option>';
    }else{
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function() {
            if(this.responseText=='An error occurred.'){
                alert("Ocurrió un error al cargar la información.")
            }else{
                document.getElementById("branches").innerHTML =
                this.responseText;
            }
    
        }
        xhttp.open("GET", `php/branches.php?warehouse=${warehouse_code}`);
        xhttp.send(); 
    }
}