function updateCaseNumber(caseInput){
    const caseInputField = document.getElementById('case-input-field');
    const caseInputFieldString = caseInputField.value;
    const previousInputNumber = parseInt(caseInputFieldString);

    let newInputNumber;

    if (caseInput === true) {
        newInputNumber = previousInputNumber + 1;
    } else {
        newInputNumber = previousInputNumber - 1;
        
    }
    caseInputField.value = newInputNumber;
    return newInputNumber;
   
}

function updateCasePrice(newInputNumber){
    const newCaseTotal = newInputNumber * 15;
    const caseTotal = document.getElementById('case-total');
    caseTotal.innerText = newCaseTotal;
}

document.getElementById('case-button-plus').addEventListener('click', function(){
    const newInputNumber = updateCaseNumber(true);
    updateCasePrice(newInputNumber);
    
 })
 
 document.getElementById('case-button-minus').addEventListener('click', function(){
    const newInputNumber = updateCaseNumber(false);
    updateCasePrice(newInputNumber);
  
 })
 




