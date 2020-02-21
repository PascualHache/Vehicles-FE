window.onload = function initFunction() {
  myToggle();
}

var carList: any;
var wheelsList: any= [];
wheelsList.length = 4;
var lastpage: boolean = false;

function sendCarForm() {
  var car = new Car(carList[0], carList[1], carList[2]);
  for (let index = 0; index < 4; index++) {
    car.addWheel(new Wheel(wheelsList[index][1], wheelsList[index][0]));
  }
  clearForm();
  clearTable();
  lastpage=false;
  myToggle();
}

function fillCar() {
  let plate: any = document.getElementById("plate");
  let brand: any = document.getElementById("brand");
  let color: any = document.getElementById("color");
  carList = [plate.value, brand.value, color.value]
  addRowCarTable(carList);
  myToggle();
  return carList;
}

function updateWheels() {
  let table: any = document.getElementById("tablita2");
  let row = table.insertRow(2);
  for (let index = 0; index < 4; index++) {
    let cell = row.insertCell(index);
    let w: any = document.getElementById("WheelBrand" + [index + 1]);
    let d: any = document.getElementById('WheelD' + [index + 1]);
    cell.innerHTML = `${w.value} : ${d.value}`;
    wheelsList[index] = [w.value, d.value];
  }
}

function myToggle() {
  let x: any = document.getElementById("tab1");
  let y: any = document.getElementById("tab2");
  let t1: any = document.getElementById("tablita1");
  let t2: any = document.getElementById("tablita2");
  let b1: any = document.getElementById("button1");
  let b2: any = document.getElementById("button2");
  let b3: any = document.getElementById("button3");
  if(!lastpage){
    if (y.style.display === "none") {
      x.style.display = "none";
      y.style.display = "block";
      t1.style.visibility = "visible";
      t2.style.visibility = "visible";
      b1.style.display = "none";
      b2.style.display = "block"
      b3.style.display = "none";
    } else {
      x.style.display = "block";
      y.style.display = "none";
      t2.style.visibility = "hidden";
      b1.style.display = "block";
      b2.style.display = "none"
      b3.style.display = "none";
  }
}else{
  b1.style.display = "none";
  b2.style.display = "none"
  b3.style.display = "block";
}
}

function addRowCarTable(carList: any) {
  let table: any = document.getElementById("tablita1");
  let row = table.insertRow(2);
  for (let index = 0; index < 3; index++) {
    let cell = row.insertCell(index);
    cell.innerHTML = carList[index];
  }
}

function validateCarFields() {
  let plateTest: any = document.getElementById("plate");
  let BrandTest: any = document.getElementById("brand");
  let ColorTest: any = document.getElementById("color");
  if (plateTest.checkValidity()) {
    console.log("Esta bien!");
    if (BrandTest.validity.valueMissing || ColorTest.validity.valueMissing) {
      alert("Todos los campos deben ser completados")
    } else {
      fillCar()
    }
  } else {
    if (plateTest.validity.valueMissing) {
      alert("El campo matrícula está vacío. introduce una matrícula válida")
    } else if (plateTest.validity.patternMismatch) {
      alert("La matrícula debe contener 4 digitos y 3 letras")
    }
  }
}

function validateWheelDiam() {
  let isError: boolean = false;
  for (let index = 0; index < 4; index++) {
    let d: any = document.getElementById('WheelD' + [index + 1]);
    var num: number = d.value;
    if (!(num > 0.4 && num < 2)) {
      alert("El diámetro de la rueda " + (index + 1) + " no es correcto. Debe ser un valor comprendido entre 0.4 y 2")
      isError = true;
      break;
    }
  }
  if (!isError) {
    updateWheels();
    lastpage =true;
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

function clearTable(){
  let table1: any = document.getElementById("tablita1");
  let table2: any = document.getElementById("tablita2");
  let rowCount1 = table1.rows.length;
  let rowCount2 = table2.rows.length;
  table1.deleteRow(rowCount1 -1);
  table2.deleteRow(rowCount2 -1);
}