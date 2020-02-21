"use strict";
window.onload = function initFunction() {
    myToggle();
};
var carList;
var wheelsList = [];
wheelsList.length = 4;
var lastpage = false;
function sendCarForm() {
    var car = new Car(carList[0], carList[1], carList[2]);
    for (var index = 0; index < 4; index++) {
        car.addWheel(new Wheel(wheelsList[index][1], wheelsList[index][0]));
    }
    clearForm();
    clearTable();
    lastpage = false;
    myToggle();
}
function fillCar() {
    var plate = document.getElementById("plate");
    var brand = document.getElementById("brand");
    var color = document.getElementById("color");
    carList = [plate.value, brand.value, color.value];
    addRowCarTable(carList);
    myToggle();
    return carList;
}
function updateWheels() {
    var table = document.getElementById("tablita2");
    var row = table.insertRow(2);
    for (var index = 0; index < 4; index++) {
        var cell = row.insertCell(index);
        var w = document.getElementById("WheelBrand" + [index + 1]);
        var d = document.getElementById('WheelD' + [index + 1]);
        cell.innerHTML = w.value + " : " + d.value;
        wheelsList[index] = [w.value, d.value];
    }
}
function myToggle() {
    var x = document.getElementById("tab1");
    var y = document.getElementById("tab2");
    var t1 = document.getElementById("tablita1");
    var t2 = document.getElementById("tablita2");
    var b1 = document.getElementById("button1");
    var b2 = document.getElementById("button2");
    var b3 = document.getElementById("button3");
    if (!lastpage) {
        if (y.style.display === "none") {
            x.style.display = "none";
            y.style.display = "block";
            t1.style.visibility = "visible";
            t2.style.visibility = "visible";
            b1.style.display = "none";
            b2.style.display = "block";
            b3.style.display = "none";
        }
        else {
            x.style.display = "block";
            y.style.display = "none";
            t2.style.visibility = "hidden";
            b1.style.display = "block";
            b2.style.display = "none";
            b3.style.display = "none";
        }
    }
    else {
        b1.style.display = "none";
        b2.style.display = "none";
        b3.style.display = "block";
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
            alert("La matrícula debe contener 4 digitos y 3 letras");
        }
    }
}
function validateWheelDiam() {
    var isError = false;
    for (var index = 0; index < 4; index++) {
        var d = document.getElementById('WheelD' + [index + 1]);
        var num = d.value;
        if (!(num > 0.4 && num < 2)) {
            alert("El diámetro de la rueda " + (index + 1) + " no es correcto. Debe ser un valor comprendido entre 0.4 y 2");
            isError = true;
            break;
        }
    }
    if (!isError) {
        updateWheels();
        lastpage = true;
        myToggle();
    }
}
function clearForm() {
    carList = [];
    wheelsList = [];
    var elements = document.getElementsByTagName("input");
    for (var n = 0; n < elements.length; n++) {
        if (elements[n].type == "text") {
            elements[n].value = "";
        }
    }
}
function clearTable() {
    var table1 = document.getElementById("tablita1");
    var table2 = document.getElementById("tablita2");
    var rowCount1 = table1.rows.length;
    var rowCount2 = table2.rows.length;
    table1.deleteRow(rowCount1 - 1);
    table2.deleteRow(rowCount2 - 1);
}
