"use strict";
window.onload = function initFunction() {
    myToggle();
};
function createCar(plate, brand, color) {
    var car = new Car(plate, color, brand);
    car.addWheel(new Wheel(2, "SEAT"));
    addRowCarTable(car.plate, car.color, JSON.stringify(car.wheels));
    // var a: any = document.getElementById("carInfo");
    // a.innerText = "CAR: PLATE: " + car.plate
    //   + " COLOR: " + car.color + " BRAND: " + brand
    //   + " WHEELS: " + JSON.stringify(car.wheels);
    myToggle();
    var z = document.getElementById("tablita");
    z.style.visibility = "visible";
}
function myTest() {
    createCar('1212SDS', 'SEAT', 'ROJO');
}
function myToggle() {
    var x = document.getElementById("tab1");
    var y = document.getElementById("tab2");
    var z = document.getElementById("tablita");
    if (y.style.display === "none") {
        x.style.display = "none";
        y.style.display = "block";
        z.style.visibility = "visible";
    }
    else {
        x.style.display = "block";
        y.style.display = "none";
    }
}
function addRowCarTable(plate, brand, color) {
    var table = document.getElementById("tablita");
    var row = table.insertRow(2);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = plate;
    cell2.innerHTML = brand;
    cell3.innerHTML = color;
}
