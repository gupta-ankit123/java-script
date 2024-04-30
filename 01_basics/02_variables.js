const accountId=12345
let accountEmail="abc@gmail.com"
var accountPassword="21234"
accountCity="Jaipur"
let accountState;

//accountId=2 //not allowed because we cannot change the value of constant variables

accountEmail="xyz@gmail.com"
accountPassword="2345"
accountCity="Bangalore"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountEmail,accountId,accountPassword,accountState,accountCity])