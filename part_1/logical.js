// &&-> and
// ||-> or
// !-> reverse

let isloggedin=true;
let isadmin=false;

console.log(isloggedin && isadmin);


let isEmailVerified=false;
let isPaymentDone=false;

console.log(isEmailVerified || isPaymentDone);

if(isEmailVerified || isPaymentDone){
    console.log("allow user to access dashboard");
}else{
    console.log("block user from accessing dashboard");
}

