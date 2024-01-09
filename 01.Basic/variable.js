const accountId = 144553;
let accountEmail = "sam@gmail.com";
var accountPassword = "12345";
accountCity = "Lonar";
let accountState;

//accountId = 2//not allowed

accountEmail = "hc@gmail.com";
accountPassword = "12624";
accountCity = "Pune";

console.log(accountId);
/*
Prefer not to use var
because of issue in block scope and functional scope

*/

console.table([accountEmail, accountId, accountPassword, accountCity,accountState]);
