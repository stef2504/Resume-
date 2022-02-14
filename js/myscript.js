/* set the width on the side navigation bar to 250px */
function openNav(){
    document.getElementById("mysidenav").style.width = "300px";
    document.getElementById("main").style.marginLeft = "300px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.5)";
}

function closenav(){
    document.getElementById("mysidenav").style.width = "0";
    document.getElementById("main").style.marginLeft ="0";
    document.body.style.backgroundColor = "white";
}