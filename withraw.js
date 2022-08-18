
document.getElementById("witrow-btn").addEventListener("click",function(){
    const newdepositseAmount=getinputFiled("withraw-input");
    const newtextPreviouse=getTextElement("text-Witraw")

    const resultNew=newdepositseAmount + newtextPreviouse;

    setElement("text-Witraw",resultNew)


    const balancetotal=getTextElement("deposite-balance")

    const almostseshhoilowonnekhkosterpor=balancetotal - newdepositseAmount ;
    setElement("deposite-balance",almostseshhoilowonnekhkosterpor)
})
