function updatePhoneNumber(phoneInput){
    const phoneInputField = document.getElementById('phone-input-field');
    const phoneInputString = phoneInputField.value;
    const previousInputNumber = parseInt(phoneInputString);

    let newPhoneNumber;

    if (phoneInput === true) {
        newPhoneNumber = previousInputNumber + 1
    } else {
        newPhoneNumber = previousInputNumber - 1
    }

    
    phoneInputField.value = newPhoneNumber;
    return newPhoneNumber;
}

function updatePhonePrice(newPhoneNumber){
    const newPhoneTotal = newPhoneNumber * 1219;
    const phoneTotal = document.getElementById('phone-total');
    phoneTotal.innerText = newPhoneTotal;
}

document.getElementById('phone-button-plus').addEventListener('click', function(){
   const newPhoneNumber = updatePhoneNumber(true)
   updatePhonePrice(newPhoneNumber)
})
document.getElementById('phone-button-minus').addEventListener('click', function(){
   const newPhoneNumber = updatePhoneNumber(false)
   updatePhonePrice(newPhoneNumber)
})


let base = 10;
let height = 5;

let area = calculateArea(base, height);

console.log(area); // Output: 25


function calculateArea(b, h) {
    let A = 0.5 * b * h;
    return A;
  }
  
















