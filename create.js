window.onload = function() {
   story=localStorage.getItem("story");
   document.querySelector(".story").innerHTML = story;
   info = localStorage.getItem("info");
   infoParse = JSON.parse(info)

  if(infoParse.gender=="boy"){
    if(infoParse.animal=="dog"){
      document.querySelector(".image1").src = "images/prince-dog.png"
    }
    else{
      document.querySelector(".image1").src = "images/prince-cat.png"
    }
  }
  else{
    if(infoParse.animal=="dog"){
      document.querySelector(".image1").src = "images/princess-dog.png"
    }
    else{
      document.querySelector(".image1").src = "images/princess-cat.png"
    }
  }
}
