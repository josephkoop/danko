document.addEventListener("DOMContentLoaded", function(){
    function imageSwitch(){
        const images = [ 
            "photos/bushhog.jpg",
            "photos/driller.jpeg", 
            "photos/semi.png", 
            "photos/feedtrailer.jpeg", 
            "photos/dump.jpg", 
            "photos/mpdbuilding.jpeg", 
            "photos/bumper.jpg", 
            "photos/yellowsemi.jpg", 
            "photos/crane.jpg",
            "photos/tank.jpeg"
        ];
        let index = 0;

        const image0 = document.getElementById("slideshow");
        image0.classList.add("visible");
        setInterval(() => {
            image0.classList.remove("visible");
            setTimeout(() => {
                index = (index + 1) % images.length;
                image0.src = images[index];
                image0.classList.add("visible");
            }, 500);
        }, 7000);
    }
    imageSwitch();
});

document.addEventListener("DOMContentLoaded", function (){
    const menu = document.getElementById("menu");
    const ham = document.querySelector(".h-menu");
    ham.addEventListener("click", function (event){
        menu.classList.toggle("active");
        event.stopPropagation();
    });

    document.addEventListener("click", function (event){
        if(menu.classList.contains("active")){
            menu.classList.remove("active");
        }
    });

    menu.addEventListener("click", function (event){
        event.stopPropagation();
    });
});