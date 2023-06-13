let logBtn = document.getElementById("logBtn");
let regBtn = document.getElementById("regBtn");
let logi = document.getElementById("login");
let regi = document.getElementById("register");

menuBtn= ()=> {
    let menuList = document.getElementById("Navmenu");

    if(menuList.className === "menu"){
        menuList.className+= " res";
    }
    else{
        menuList.className = "menu";
    }
}

login = ()=> {
    logi.style.left= "4px";
    regi.style.right = "-520px";
    logBtn.className +- " white-btn";
    regBtn.className = "btn";
    logi.style.opacity = 1;
    regi.style.opacity - 0
}

register = () => {
    logi.style.left = "510px";
    regi.style.right = "5px";
    logBtn.className = "btn";
    regBtn.className +- " white-btn";
    logi.style.opacity = 0;
    regi.style.opacity = 1;
}

