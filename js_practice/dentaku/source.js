myTotal = 0;
myInput = "";
myCalc = "+";
myFlg = 1;

function myValue(myData){
    myFlg = 0;
    myInput += myData;
    document.myForm.myLine.value = myInput;
}

function myCalculate(myData){
    if(myFlg==0){
        myFlg = 1;
        myWork = myTotal + myCalc + myInput;
        myTotal = eval(myWork);
        myInput = "";
        document.myForm.myLine.value= myTotal;
    }
    if(myData == "="){
        myTotal = 0;
        myCalc = "+";
    }else{
        myCalc = myData;
    }
}

function myC(){
    myTotal = 0;
    myCalc = "+";
    myInput = "";
    document.myForm.myLine.value = myTotal;
}