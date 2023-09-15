function smartCDN(input_CDN, input_CDNURL) {
  this.CDN = input_CDN;
  this.URL = input;
  this.year = year;
}


function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

const car1 = new Car('Eagle', 'Talon TSi', 1993);

console.log(car1.make);
// Expected output: "Eagle"



// do a try statement for all cdns and if error try a different cdn
// make it so you can enter one cdn url and it will automatically set all other common cdns
// so if you input one type of cdn url, it will convert it into other cdn urls
// make a function to make different types of cdn urls like @latest on jsdelivr
