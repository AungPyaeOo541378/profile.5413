// var navText = document.querySelectorAll("#nav-texts");
var navInput =document.querySelectorAll(".navinput");
for (let i=0 ; i<navInput.length; i++ ){
    for(let j=0 ; j<navInput.length; j++ ){
        navInput[j].classList.remove("bg-gray-900");
    }
    navInput[i].addEventListener("click",function(){

   
        navInput[i].classList.add("bg-gray-900");
    })
};


