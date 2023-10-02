let pointer = document.querySelector(".moving-cursor");
window.addEventListener("mousemove", cursor);
function cursor(event) {
  pointer.style.top = event.pageY + "px";
  pointer.style.left = event.pageX + "px";
}

let nav_items = document.querySelectorAll(".nav-item");

nav_items.forEach((element) => {
  element.addEventListener("mouseenter", function () {
    pointer.classList.add("cursor-grow");
  });
  element.addEventListener("mouseleave", () => {
    pointer.classList.remove("cursor-grow");
  });
});
 

  
 let text= document.querySelector(".text");
 let text_to_display="WELCOME TO SOFTWARE INCUBATOR";
 let char_index=0;
 document.querySelector('.text').style.textShadow="5px 5px 5px rgba(0,0,0,0.2)";
  
 const type_effect=()=>{

 if(char_index<text_to_display.length){
  text.innerHTML+= text_to_display.charAt(char_index);
  char_index++ ;
  setTimeout(type_effect,100);
 }
 else{
  text.innerHTML=``;
  char_index=0;
  type_effect();
 }
 }
   
 type_effect();
