"use strict";
window.onload = function initFunction() {
    myToggle();
};
function createCar(plate, brand, color) {
    var car = new Car(plate, color, brand);
    for (var index = 0; index < 4; index++) {
        car.addWheel(new Wheel((index + 1), "Unknown"));
    }
    var carList = [car.plate, car.brand, car.color];
    addRowCarTable(carList);
    // JSON.stringify(car.wheels)
    myToggle();
}
function fillCar() {
    var plate = document.getElementById("plate");
    var brand = document.getElementById("brand");
    var color = document.getElementById("color");
    // var car = new Car(plate, brand, color);
    // for (let index = 0; index < 4; index++) {
    //   car.addWheel(new Wheel((index + 1), "Unknown"));
    // }
    var carList = [plate.value, brand.value, color.value];
    addRowCarTable(carList);
    // JSON.stringify(car.wheels)
    myToggle();
    return carList;
}
function updateWheels() {
    var objWheels = [];
    var table = document.getElementById("tablita2");
    var row = table.insertRow(2);
    for (var index = 0; index < 4; index++) {
        var cell = row.insertCell(index);
        var w = document.getElementById("WheelBrand" + [index + 1]);
        var d = document.getElementById('WheelD' + [index + 1]);
        cell.innerHTML = w.value + " : " + d.value;
    }
}
function myToggle() {
    var x = document.getElementById("tab1");
    var y = document.getElementById("tab2");
    var t1 = document.getElementById("tablita1");
    var t2 = document.getElementById("tablita2");
    var b1 = document.getElementById("button1");
    var b2 = document.getElementById("button2");
    if (y.style.display === "none") {
        x.style.display = "none";
        y.style.display = "block";
        t1.style.visibility = "visible";
        t2.style.visibility = "visible";
        b1.style.display = "none";
        b2.style.display = "block";
    }
    else {
        x.style.display = "block";
        y.style.display = "none";
        b1.style.display = "block";
        b2.style.display = "none";
        t2.style.visibility = "hidden";
    }
}
function addRowCarTable(carList) {
    var table = document.getElementById("tablita1");
    var row = table.insertRow(2);
    for (var index = 0; index < 3; index++) {
        var cell = row.insertCell(index);
        cell.innerHTML = carList[index];
    }
}
function validateCarFields() {
    var plateTest = document.getElementById("plate");
    var BrandTest = document.getElementById("brand");
    var ColorTest = document.getElementById("color");
    if (plateTest.checkValidity()) {
        console.log("Esta bien!");
        if (BrandTest.validity.valueMissing || ColorTest.validity.valueMissing) {
            alert("Todos los campos deben ser completados");
        }
        else {
            fillCar();
        }
    }
    else {
        if (plateTest.validity.valueMissing) {
            alert("El campo matrícula está vacío. introduce una matrícula válida");
        }
        else if (plateTest.validity.patternMismatch) {
            alert("La matricula debe contener 4 digitos y 3 letras");
        }
    }
}
function validateWheelDiam() {
    var isError = false;
    for (var index = 0; index < 4; index++) {
        // let w: any = document.getElementById("WheelBrand"+[index+1]);
        var d = document.getElementById('WheelD' + [index + 1]);
        var num = d.value;
        if (!(num > 0.4 && num < 2)) {
            alert("El diámetro de la rueda " + (index + 1) + " no es correcto");
            isError = true;
            break;
        }
    }
    if (!isError) {
        updateWheels();
    }
}
