function toogle(){
    let popup = document.querySelector("#btn2-act");
    popup.classList.toggle('active');
}
function toogle1(){
    let popup1 = document.querySelector("#btn1-act");
    popup1.classList.toggle('active');
}
function toogle2(){
    let popup2 = document.getElementById("book");
    popup2.classList.toggle('active');
}
function preloaderstop(){
    let preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
}
function sent(){
    toogle2();
    let popup2 = document.querySelector("#form-5 button");
    alert("Message Sent");
}
function appear1(){
    let main1 = document.querySelector("#main1");
    main1.style.display = "block";
    let main2 = document.querySelector("#main2");
    main2.style.display = "none";
    let main3 = document.querySelector("#main3");
    main3.style.display = "none";
    let main4 = document.querySelector("#main4");
    main4.style.display = "none";
}
function appear2(){
    let main1 = document.querySelector("#main1");
    main1.style.display = "none";
    let main2 = document.querySelector("#main2");
    main2.style.display = "block";
    let main3 = document.querySelector("#main3");
    main3.style.display = "none";
    let main4 = document.querySelector("#main4");
    main4.style.display = "none";
}
function appear3(){
    let main1 = document.querySelector("#main1");
    main1.style.display = "none";
    let main2 = document.querySelector("#main2");
    main2.style.display = "none";
    let main3 = document.querySelector("#main3");
    main3.style.display = "block";
    let main4 = document.querySelector("#main4");
    main4.style.display = "none";
}
function appear4(){
    let main1 = document.querySelector("#main1");
    main1.style.display = "none";
    let main2 = document.querySelector("#main2");
    main2.style.display = "none";
    let main3 = document.querySelector("#main3");
    main3.style.display = "none";
    let main4 = document.querySelector("#main4");
    main4.style.display = "block";
}