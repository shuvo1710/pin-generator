function getpin(){
    const pin = generatepin();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }
    else{
        return getpin();
    }

}
function generatepin(){
    const rendom = Math.round(Math.random()*10000);
    return rendom;
}
document.getElementById('generate-pin').addEventListener('click',function(){
    const pin = getpin();
    const displayPin = document.getElementById('display-pin');
    displayPin.value = pin;
})

document.getElementById('calculator').addEventListener('click',function(event){
    const number = event.target.innerText;
    const typeNumberField = document.getElementById('typed-number');
    const previoustypeNumber = typeNumberField.value;
    if(isNaN(number)){
        if(number === 'C'){
            typeNumberField.value ='';
        }
        else if(number === '<'){
            const digits = previoustypeNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typeNumberField.value = remainingDigits;

        }
    }
    else{
        const newTypeNumber = previoustypeNumber + number 
        typeNumberField.value = newTypeNumber;
    }
    
})

document.getElementById('verify-pin').addEventListener('click',function(){
    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;

    const typeNumberfield = document.getElementById('typed-number');
    const typeNumber = typeNumberfield.value;

    const pinSuccesMessage = document.getElementById('pin-succes');
    const pinNotMatch = document.getElementById('pin-not-match');

    if(currentPin == typeNumber){
        pinSuccesMessage.style.display = 'block'
        pinNotMatch.style.display = 'none';
    }
    else{
        pinNotMatch.style.display = 'block';
        pinSuccesMessage.style.display = 'none'
    } 
})