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



 let parallix= document.querySelector(".parallix");
  parallix.addEventListener('mouseover',()=>{
    pointer.classList.add("pointer2");
  });

   parallix.addEventListener('mouseleave',()=>
   pointer.classList.remove("pointer2"));
   
   let heading=document.querySelector("#head")
   let leaf =document.querySelector("#leaf");
   let hill1 =document.querySelector("#hill1");
   let hill2 =document.querySelector("#hill2");
   let hill3=document.querySelector("#hill3");
   let hill4 =document.querySelector("#hill4");
   let hill5 =document.querySelector("#hill5");
   let plant=document.querySelector("#plant");
   let tree =document.querySelector("#tree");
   
  window.addEventListener('scroll',()=>{
    let scroll=window.scrollY;
    console.log(scroll);
    if(scroll>50){
   heading.style.marginTop = scroll*2.5 +"px" ;
    leaf.style.top= -scroll + "px";
    hill5.style.left= scroll+ "px";
     hill4.style.left= -scroll +"px";
     hill1.style.top= -scroll + "px";};
  });
  

  let content=document.querySelector(".content");
  content.addEventListener("mouseover",()=>{
    pointer.classList.add("pointer3");
  })
  content.addEventListener('mouseleave',()=>{
    pointer.classList.remove("pointer3");
  })