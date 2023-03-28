 document.addEventListener("click",function (popUp)
 {
   if(popUp.target.classList.contains("photo"))
   {
   	  const src = popUp.target.getAttribute("src");
   	  document.querySelector(".modal-img").src = src;
   	  const popUpModal = new bootstrap.Modal(document.getElementById('photo-modal'));
   	  popUpModal.show();
   }
}
 )