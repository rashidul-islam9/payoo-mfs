// console.log("added js file");

// document.getElementById('btn-login').addEventListener('click',function(){})
// step 1 : set event handler
document.getElementById('btn-login')
.addEventListener('click',function(event){
// step 2 : prevent default behavior (prevent reloading browser)
event.preventDefault(); 
// console.log('btn clicked');

// step 3 : get the phone number 
const phoneNumber = document.getElementById('phone-num').value;
const pinNumber = document.getElementById('pin-num').value;
console.log(phoneNumber,pinNumber);

// step 4 : validate phone and pin
// this is temporary.you should not do like this 

if(phoneNumber=== '5' && pinNumber=== '1234'){
    console.log('Yoy are logged in');
    window.location.href='/home.html'
}
else{
    alert('Wrong phone number or pin');
}
})