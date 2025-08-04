const navBarElement = document.getElementById("nav-bar-element");
const hamburger = document.getElementById("hamburger");
let navAnchor = navBarElement.querySelectorAll("a");

function nav_bar_click() {
   console.log(alert("clicked"));

    navBarElement.classList.toggle("hidden");
    hamburger.classList.add("hidden");
    navBarElement.classList.add("bg-white", "shadow-2xl", "rounded-2xl" ,"w-40", "h-70","absolute", "top-4", "right-3", "z-10", );
    

const container = document.getElementById("nav-bar-element");
container.style.display = "flex";
container.style.gap = "2px";  // adds gap between all children

const body = document.querySelector("body");
body.addEventListener("click", function(event) {
   
      if(window.innerWidth > 640 && (!navBarElement.contains(event.target) && !hamburger.contains(event.target)) ){
        navBarElement.classList.add("block");
        hamburger.classList.add("hidden");

       }
   
    else {
      if (!navBarElement.contains(event.target) && !hamburger.contains(event.target)) {
       navBarElement.classList.add("hidden");
       navBarElement.style.display = "none"; // hide the nav bar when clicking outside
       hamburger.classList.remove("hidden");
       location.reload(); 
       }
      
    }    
 
});



}

function apply(){
    window.location.href = "http://127.0.0.1:5500/project/paymet.html";
}

const ph_1 = document.getElementById("ph-1") ; 
const ph_2 = document.getElementById("ss") ; 
const ph_3 = document.getElementById("sss") ; 
const ph_4 = document.getElementById("sssss") ; 
const ph_5 = document.getElementById("tr") ; 
const ph_6 = document.getElementById("fg") ; 

function hideAllImages(){
    [ph_1,ph_2,ph_3,ph_4,ph_5,ph_6].forEach(img =>{
        img.classList.add("hidden"); 
    }); 
}

const sports = document.getElementById("sports"); 
const display_photo = document.getElementById("display_photo") ; 
sports.addEventListener('click', function(e){
   e.preventDefault(); 
    hideAllImages(); 
  ph_1.classList.remove("hidden"); 


});


const indoor_game = document.getElementById("indoor_game"); 
indoor_game.addEventListener('click', function(e){
      e.preventDefault();
      hideAllImages(); 
      ph_2.classList.remove("hidden"); 
     
});

const bbq = document.getElementById("bbq"); 
bbq.addEventListener('click', function(e){
      e.preventDefault();
      hideAllImages(); 
      ph_3.classList.remove("hidden"); 
    
});

const family_day = document.getElementById("family_day"); 
family_day.addEventListener('click', function(e){
     e.preventDefault();
     hideAllImages(); 
     ph_4.classList.remove("hidden"); 
    
});
const gym = document.getElementById("gym"); 
gym.addEventListener('click', function(e){
     e.preventDefault();
     hideAllImages(); 
     ph_5.classList.remove("hidden"); 
    
});
const photography = document.getElementById("photography"); 
photography.addEventListener('click', function(e){
      e.preventDefault();
      hideAllImages(); 
      ph_6.classList.remove("hidden"); 
    
});

const side_info = document.getElementById("side_info");
const footer = document.querySelector("footer"); 
   if(window.innerHeight >= 600 ){
        side_info.classList.add("hidden") ; 
    }
    else {
        side_info.classList.remove("hidden"); 
    }









