
// Get Reference Variables to the input and label elements
const calculateButton = document.querySelector('label')
const shippingWeight = document.querySelector('input')


//  Event
calculateButton.addEventListener('click', function(){
 
    console.log(shippingWeight.value);
})

