/* set the width on the side navigation bar to 250px 
function openNav(){
    document.getElementById("mysidenav").style.width = "300px";
    document.getElementById("main").style.marginLeft = "300px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.5)";
}

function closenav(){
    document.getElementById("mysidenav").style.width = "0";
    document.getElementById("main").style.marginLeft ="0";
    document.body.style.backgroundColor = "white";
} */

window.onscroll = function() {scrollFunction()};

function scrollFunction (){
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80)
{
    document.getElementById("navbar").style.padding = "20px 10px";
} else {
    document.getElementById("navbar").style.padding = "50px 10px";
}
};
