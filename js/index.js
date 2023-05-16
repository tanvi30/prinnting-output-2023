
// Task 1
// If a has value 3, b has value 5, and c doesn't have a value

let a = 3;
let b = 5;
let c;

// alert( "description of alerted_value: " + alerted_value );
alert(`
var a = 3;
var b = 5;
var c;
---------
a + b = ${a + b}
a - b = ${a - b}
a * b = ${a * b}
a / b = ${a / b}
a % b = ${a % b}
a += b : ${a += b}
a -= b : ${a -= b}
a *= b : ${a *= b}
a /= b : ${a /= b}
a %= b : ${a %= b}
a == b : ${a == b}
a != b : ${a != b}
a > b : ${a > b}
a < b : ${a < b}
!a && !c : ${!a && !c}
!a || !c : ${!a || !c}
`
);


// Task 2
// Declare the variable first_name and assign it with the value of your first name;
let first_name = "Tanvi";

// Declare the variable last_name and assign it with the value of your last name;
let last_name = "last_name";

// Declare the variable last_name and assign it with the value of your last name;
let email = "tanvigera3004@gmail.com";

// Declare the variable output;
let output;

// Cocatinate
output=`My name is ${first_name} ${last_name} you can contact me at ${email}`;

alert(output);
