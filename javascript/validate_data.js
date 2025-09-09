function validateData(){

    const product_code =document.getElementById("product_code").value
    const product_name =document.getElementById("product_name").value
    const product_price = document.getElementById("product_price").value
    const product_description = document.getElementById("product_description").value

    const product_currency = document.getElementById("currency").value
    const product_warehouse= document.getElementById("warehouses").value
    const product_branch = document.getElementById("branches").value
    
    const has_plastic = document.getElementById('has_plastic').checked;
    const has_metal = document.getElementById('has_metal').checked;
    const has_wood = document.getElementById('has_wood').checked;
    const has_glass = document.getElementById('has_glass').checked;
    const has_fabric = document.getElementById('has_fabric').checked;

    var canSubmit = true

    if(!validateCode(product_code)){
        canSubmit = false
    }
    if(!validateName(product_name)){
        canSubmit = false
    }
    if(!validatePrice(product_price)){
        canSubmit = false
    }
    if(!validateDescription(product_description)){
        canSubmit = false
    }
    let materials_count = 0;
    let materials_array = "";
    if(has_plastic){
        materials_array = materials_array+"'plastic'";
        materials_count++;
    }
    if(has_metal){
        if(materials_array.length>0){
            materials_array = materials_array+","
        }
        materials_array = materials_array+"'metal'",
        materials_count++;
    }
    if(has_wood){
        if(materials_array.length>0){
            materials_array = materials_array+","
        }
        materials_array = materials_array+"'wood'";
        materials_count++;
    }
    if(has_glass){
        if(materials_array.length>0){
            materials_array = materials_array+","
        }
        materials_array = materials_array+"'glass'";
        materials_count++;
    }
    if(has_fabric){
        if(materials_array.length>0){
            materials_array = materials_array+","
        }
        materials_array = materials_array+"'fabric'";
        materials_count++;
    }
    if(materials_count<2){
        alert("Debe seleccionar al menos dos materiales para el producto.")
        canSubmit = false
    }

    if(product_warehouse==''){
        alert("Debe seleccionar una bodega.")
        canSubmit = false
    }

    if(product_branch==''){
        alert("Debe seleccionar una sucursal para la bodega seleccionada.")
        canSubmit = false
    }
    if(product_currency==''){
        alert("Debe seleccionar una moneda para el producto.")
        canSubmit = false
    }

    if(canSubmit){
        let obj={
            product_code,
            product_name,
            product_branch,
            product_currency,
            product_price,
            product_materials: materials_array,
            product_description

        }
        submitProduct(obj)
    }



}




function validateCode(code){
    const regex_alphanumeric = /^(?=.*?\d)(?=.*?[a-zA-Z])[a-zA-Z\d]+$/;
    let isValid = true
    if(!regex_alphanumeric.test(code)){
        alert("El código del producto debe contener letras y números")
        isValid=false
        
    }
    if(code.length==0){

        alert("El código del producto no puede estar en blanco.")
        isValid= false
    }
    if(code.length<5 || code.length>15){

        alert("El código del producto debe tener entre 5 y 15 caracteres.")
        isValid= false
    }

    return isValid
}

function validateName(name){
    let isValid=true

    if(name.length==0){
        alert("El nombre del producto no puede estar en blanco.")
        isValid= false

    }
    if(name.length<2 || name.length>50){
        alert("El nombre del producto debe tener entre 2 y 50 caracteres.")
        isValid= false
    }

    return isValid
}

function validatePrice(price){
    const regex_numeric_two_decimals = /^\d+(\.\d{1,2})?$/;

    let isValid = true
    if(price.length==0){
        alert("El precio del producto no puede estar en blanco.")
        isValid=false
    }
    if(!regex_numeric_two_decimals.test(price)){
        alert("El precio del producto debe ser un número positivo con hasta dos decimales.")
        isValid=false
    }
    return isValid
}

function validateDescription(desc){
    let isValid = true
    if(desc.length==0){
        alert("La descripción del producto no puede estar en blanco.")
        isValid = false
    }
    if(desc.length<10 || desc.length>1000){
        alert("La descripción del producto debe tener entre 10 y 1000 caracteres.")
        isValid = false
    }
    return isValid
}