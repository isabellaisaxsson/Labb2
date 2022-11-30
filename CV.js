let id = null; 

const elem = document.getElementById("imgOfme");

let pos = 0;

clearInterval(id);

id = setInterval(frame, 5);

function frame(){
    if(pos == 70){
        clearInterval(id);
    }
    else{
        pos++;
        elem.style.top = pos + "px";
        elem.style.left = pos + "px";
    }
};

function myFunction() {
    window.location.href="portfolio.html";  
  }







