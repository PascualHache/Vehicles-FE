window.onload = function initFunction() {
  myToggle();
}

function createCar(plate: string, brand: string, color: string) {
  var car = new Car(plate, color, brand);

  for (let index = 0; index < 4; index++) {
    car.addWheel(new Wheel((index + 1), "Unknown"));
  }
  var carList: any = [car.plate, car.brand, car.color]
  addRowCarTable(carList);
  // JSON.stringify(car.wheels)
  myToggle();
}

function fillCar() {
  let plate: any = document.getElementById("plate");
  let brand: any = document.getElementById("brand");
  let color: any = document.getElementById("color");
  // var car = new Car(plate, brand, color);
  // for (let index = 0; index < 4; index++) {
  //   car.addWheel(new Wheel((index + 1), "Unknown"));
  // }
  var carList: any = [plate.value, brand.value, color.value]
  addRowCarTable(carList);
  // JSON.stringify(car.wheels)
  myToggle();
  return carList;
}

function updateWheels() {
  var objWheels: any = [];
  let table: any = document.getElementById("tablita2");
  let row = table.insertRow(2);
  for (let index = 0; index < 4; index++) {
    let cell = row.insertCell(index);
    let w: any = document.getElementById("WheelBrand" + [index + 1]);
    let d: any = document.getElementById('WheelD' + [index + 1]);
    cell.innerHTML = `${w.value} : ${d.value}`;
  }
}

function myToggle() {
  let x: any = document.getElementById("tab1");
  let y: any = document.getElementById("tab2");
  let t1: any = document.getElementById("tablita1");
  let t2: any = document.getElementById("tablita2");
  let b1: any = document.getElementById("button1");
  let b2: any = document.getElementById("button2");
  if (y.style.display === "none") {
    x.style.display = "none";
    y.style.display = "block";
    t1.style.visibility = "visible";
    t2.style.visibility = "visible";
    b1.style.display = "none";
    b2.style.display = "block"
  } else {
    x.style.display = "block";
    y.style.display = "none";
    b1.style.display = "block";
    b2.style.display = "none"
    t2.style.visibility = "hidden";


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
      alert("La matricula debe contener 4 digitos y 3 letras")
    }
  }
}

function validateWheelDiam() {
  let isError: boolean = false;
  for (let index = 0; index < 4; index++) {
    // let w: any = document.getElementById("WheelBrand"+[index+1]);
    let d: any = document.getElementById('WheelD' + [index + 1]);
    var num: number = d.value;
    if (!(num > 0.4 && num < 2)) {
      alert("El diámetro de la rueda " + (index + 1) + " no es correcto")
      isError = true;
      break;
    }
  }
  if (!isError) {
    updateWheels();
  }
}