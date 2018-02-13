var input = Number(prompt("enter natural number from 1 to 20", 1));
var brick = '[~]';
var space= ""
if (isNaN(input) || input % 1 != 0 || input <= 0 || input > 20) {
    console.error('Incorrect!');
} else {
    for(var i = 1; i <= input; i++) {
      for(var j = 1; j <=(input -i); j++) { 
        space = space.concat("   "); 
  }
  for(var x=2; x<=i; x++) {
    space = space.concat(brick+brick);
  }
    space = space.concat(brick+"\n");
}
}
console.log(space);