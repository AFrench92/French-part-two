let input = prompt("How many inches of rain fell?");
let rain = "";
for(let i = 0; i < input; i++){
  rain += "*";
}
console.log(rain);
let yield = 50;
if(input>20){
  yield *= 0.9;
}else if(input<10){
  yield *= 0.8;
}

let fertilizer=prompt("Did you use fertilizer?");
let premium=""

if (fertilizer === "no"){
    premium="none";
}else if(fertilizer === "yes"){
    premium=prompt("Did you use regular or premium fertilizer?");
}


if (premium==="premium"){
    yield *= 1.15;
} else if(premium==="regular"){
    yield *= 1.1;
}

yield = yield.toFixed(2);

console.log(`The yield should be ${yield} bushels per acre`);