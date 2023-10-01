 
  let pointer = document.querySelector(".moving-cursor");
        window.addEventListener('mousemove',cursor);
 function cursor(event){
    pointer.style.top=event.pageY+"px";
    pointer.style.left=event.pageX +"px";

  }

