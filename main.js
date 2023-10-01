 
  let pointer = document.querySelector(".moving-cursor");
        window.addEventListener('mousemove',cursor);
 function cursor(event){
    pointer.style.top=event.pageY+"px";
    pointer.style.left=event.pageX +"px";

  }

   let nav_items = document.querySelector(".nav-item");
   nav_items.addEventListener('mouseover',()=>{
    pointer.classList.remove("moving-cursor");
    pointer.classList.add("cursor-grow");
   })
