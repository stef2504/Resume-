
window.onscroll = function() {scrollFunction()};

function scrollFunction (){
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80)
{
    document.getElementById("navbar").style.padding = "20px 10px";
} else {
    document.getElementById("navbar").style.padding = "50px 10px";
}
};

/* the modal for the image of office*/
const modal = document.getElementById("firstmodal");
const img = document.getElementById("myimg");
const span = document.getElementsByClassName("close")[0];

img.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal){
        modal.style.display = "none";
    }
}