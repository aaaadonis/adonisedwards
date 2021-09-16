const text = document.querySelector(".circular-text .text");
const rotate = new CircleType(text).radius(80);
const hardies = document.getElementById("hardies");
const chill = document.getElementById("chill");

hardies.addEventListener("click", function(){
    window.location.href = "www.hardieshardware.com";
})

chill.addEventListener("click", function(){
    window.location.href = "www.c-h-i-l-l/#/.com";
})

window.addEventListener("scroll", function () {
    text.style.transform = `rotate(${window.scrollY * .15}deg)`;
});

// $(document).ready(function(){
//     $(".submit").click(function (event){

//         let email = $('.email').val()
//         let subject = $(".subject").val();
//         let message = $(".message").val();
//         let status = $(".status");
//         status.empty();

//         if(email.length > 5 && email.includes('@') && email.includes('.')){
//             true;
//         }else{
//             event.preventDefault();
//             status.append("<div>Email is not valid</div>");
//         }

//         if(subject.length < 2){
//             event.preventDefault();
//             status.append("<div>Subject is not valid</div>");
//         }

//         if(message.length < 10){
//             event.preventDefault();
//             status.append("<div>Message is too short.</div>");
//         }
//     });
// })