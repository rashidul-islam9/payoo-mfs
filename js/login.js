// console.log("added js file");

// document.getElementById('btn-login').addEventListener('click',function(){})
// step 1 : set event handler
document.getElementById('btn-login')
.addEventListener('click',function(event){
// step 2 : prevent default behavior (prevent reloading browser)
event.preventDefault();
console.log('btn clicked');

// step 3 : get the phone number 
const phoneNumber = document.getElementById('phone-num').value;
console.log(phoneNumber);
})