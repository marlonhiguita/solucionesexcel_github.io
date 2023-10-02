var icono=document.querySelector("#hamburguer");
var menu=document.querySelector("#menu");
var closse=document.querySelector("#close");

icono.addEventListener('click', ()=>{
   
    if(menu.style.display=='none'){
        menu.style.display='flex';
       
    }
 else{
    menu.style.display='none';
 }
});



closse.addEventListener('click', ()=>{
    if(menu.style.display=='none'){
        menu.style.display='flex';
    }
    else{
        menu.style.display='none';
    }
});

