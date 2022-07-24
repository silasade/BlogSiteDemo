var Arrows=document.querySelectorAll("[id='arrow']");
Menu=document.querySelector(".menu");
Mobile=document.getElementById("mobile")
Menu1=document.getElementById("menu1");
if(Menu){
    Menu.addEventListener("click",(event)=>{
        for( var i=0; i<Arrows.length; i++){
            Arrows[i].setAttribute('src','blogr-landing-page-main/images/icon-arrow-dark.svg');
        }
        
        document.getElementById("arrow").src="blogr-landing-page-main/images/icon-arrow-dark.svg"
         Menu.style.display="none";
         Menu1.style.visibility="visible";
         Mobile.style.visibility="visible";
        
     
     })
}
if (Menu1){
    Menu1.addEventListener("click",(event)=>{    
        window.location.reload();
    });
    
}

