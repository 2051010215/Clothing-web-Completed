// Cố định thanh menu
window.onscroll = function() {myFunction()};
var navbar = document.getElementsByClassName("menu");
var sticky = navbar[0].offsetTop;

function myFunction(){
    if (window.pageYOffset >= sticky) {
        navbar[0].classList.add("sticky");
        } else {
        navbar[0].classList.remove("sticky");
        }
}
function email(){
    var a = document.getElementById("input").value;
    alert("Chúng tôi đã nhận được E-mail "+ a + " của bạn!\n\nCảm ơn bạn. Chúc một ngày tốt lành <3")
}
