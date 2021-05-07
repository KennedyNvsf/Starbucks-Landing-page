

let product_img = document.getElementById("starbucks");
let preview_img = document.getElementsByClassName("previewImg");
let circle = document.querySelector(".circle");


function switchIMG(){


    preview_img[0].addEventListener("click", ()=>{

        product_img.src = preview_img[0].src;
     
    });

    preview_img[1].addEventListener("click", ()=>{

        product_img.src = preview_img[1].src;
     
       
    });

    preview_img[2].addEventListener("click", ()=>{

        product_img.src = preview_img[2].src;
    
    });
};





function colorChange () {

    preview_img[0].addEventListener("click", () => {

        circle.style.background = "#017143";
    });

    preview_img[1].addEventListener("click", () => {

        circle.style.background = "#eb7495";
    });

    preview_img[2].addEventListener("click", () => {

        circle.style.background = "#d752b1";
    });
}

colorChange();

switchIMG();

