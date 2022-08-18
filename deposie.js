document.getElementById("deposite-btn").addEventListener("click",function(){
    const newDeposite=getinputFiled("deposite-inpute")




    const newBalance=getTextElement("text-update")


    const newCurrentBalance= newBalance+newDeposite;

     setElement("text-update",newCurrentBalance);


     const privioousbalance=getTextElement("deposite-balance");

     console.log(typeof privioousbalance)
     
     const previousebalanceDecrement=privioousbalance + newDeposite;

   

     setElement("deposite-balance",previousebalanceDecrement)

})