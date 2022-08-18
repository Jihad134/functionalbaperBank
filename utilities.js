function getinputFiled(input){
    const inputNumber=document.getElementById(input)
    const inputNumberString=inputNumber.value;
    const inputn=parseFloat(inputNumberString)
    inputNumber.value="";
    return inputn;
}
 
function getTextElement(text){
    const textElemet=document.getElementById(text)
    const textElemetString=textElemet.innerText;
    const text1=parseFloat(textElemetString)
    
    return text1;
}

function setElement(element,newNalue){
    const setElement1=document.getElementById(element);
    setElement1.innerText=newNalue;
}