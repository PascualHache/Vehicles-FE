window.onload = function initFunction() {
  myToggle();
}

function createCar(plate: string, brand: string, color: string) {
  let car = new Car(plate, color, brand);
  car.addWheel(new Wheel(2, "SEAT"));
  var a: any=document.getElementById("carInfo");
  a.innerText = "CAR: PLATE: " + car.plate
  + " COLOR: " + car.color + " BRAND: " + brand
  + " WHEELS: " + JSON.stringify(car.wheels);;
    myToggle();
}

function myToggle() {
  var x: any = document.getElementById("tab1");
  var y: any = document.getElementById("tab2");
  if (y.style.display === "none") {
    x.style.display = "none";
    y.style.display = "block";
  } else {
    x.style.display = "block";
    y.style.display = "none";
  }
}
