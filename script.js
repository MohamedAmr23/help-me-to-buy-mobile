var AllPhones=document.querySelectorAll(".lists li")
var content=document.querySelector(".content")
var btn1=document.querySelector(".btn1")
var btn2=document.querySelector(".btn2")
var btn3=document.querySelector(".btn3")
var sum=0;

AllPhones.forEach(function(item){
    item.onclick = function() {
        content.innerHTML+=item.textContent+"|||";
        btn1.innerHTML+=item.getAttribute("price")+"|||"
     sum+=parseInt(item.getAttribute("price"))
        btn2.onclick=function(){
            btn2.style.display="none"
            btn1.style.display="none"
            btn3.style.display="block"
         btn3.innerHTML=sum;
            }
        if(content.innerHTML!=""){
            btn1.style.display="block";
        }
        if(btn1.innerHTML!=""){
            btn2.style.display="block"; 
        }
        if(btn3.innerHTML!=""){
            btn3.style.display="block"; 
        }     
    }
})
//styles
content.style.margin="100px auto 5px"
btn2.style.margin="5px auto"
btn2.style.backgroundColor="blue";
btn2.style.width="fit-content"
btn2.style.padding="5px"
btn2.style.color="white"
btn2.style.borderRadius="5px"
content.style.fontSize="20px"
content.style.wordSpacing="2px"
btn3.style.backgroundColor="blue";
btn3.style.color="white";
btn3.style.width="fit-content"
btn3.style.padding="10px"
btn3.style.fontWeight="bold"
btn3.style.borderRadius="10px"
btn3.style.margin="5px auto"