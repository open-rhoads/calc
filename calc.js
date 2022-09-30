 //calculator function
 function calculate(numEntered){
    //if user clicks 'C' clear out the answer field
    if (numEntered == 'C'){
      document.getElementById('answer').value = '';
    }

    //if the user clicks equals, get the answer field value and evaluate its expression 
    else if (numEntered == '='){
      document.getElementById('answer').value = eval(document.getElementById('answer').value).toFixed(6);
    }

    //otherwise, get the answer field value, and add and assign the next number entered
    else {
      document.getElementById('answer').value += numEntered;
    }
  } 