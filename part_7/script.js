// example 1

 document
 .getElementById("changeTextbutton")
.addEventListener("click",function(){
   let para = document.getElementById("myparagraph");
para.textContent = "the paragraph is changed";

});


//example 2

document
  .getElementById("highlightfirstcity")
  .addEventListener("click", function(){
  document.getElementById("citieslist").firstElementChild.classList.add("highlight") 
    
  });

    
//example3
 document.getElementById("changeorder").addEventListener("click", function () {
   let coffeetype = document.getElementById("coffeetype");
   coffeetype.textContent = "espresso";
   coffeetype.style.backgroundColor = "green";
 });


 //example 4

 document.getElementById("addnewitem").addEventListener("click", function () {
   let newitem = document.createElement("li");
   newitem.textContent = "eggs"

   document.getElementById("shoppinglist").appendChild(newitem);
 });

//example 5

document.getElementById("removebutton")
.addEventListener("click",function(){

    let tasklist=document.getElementById("tasklist")
    tasklist.lastElementChild.remove();
    
})

// example 6

document.getElementById("clickMeButton").addEventListener("click",function(){
   alert("chaicode");
})  // there are many event like museover,mouseout,mousemove,double click and many more 

// example 7
document.getElementById("tealist").addEventListener("click",function(event){
  if(event.target && event.target.matches(".teaItems")){
    alert("you selected " + event.target.textContent) ;
  }
});

//example 8

document.getElementById("feedbackform").addEventListener("submit",function(event){
  event.preventDefault();
  let feedback= document.getElementById("feedbackInput").value
 
 let ffd=document.getElementById("feedbackOutput")
 ffd.textContent=`feedback is : ${feedback}`
 ffd.style.backgroundColor="green";
 ffd.style.color="orange";
})

// example 9

document.addEventListener("DOMContentLoaded",function(){
  document.getElementById("domstatus").textContent="DOM is fully loaded";
});
  
// example 10

document.getElementById("togglehighlight").addEventListener("click",function(){
  document.getElementById("descriptionText").classList.toggle("highlight");
}) // we use toggle because we have to do toggle means when we click first time it will add the class and when we click second time it will remove the class


