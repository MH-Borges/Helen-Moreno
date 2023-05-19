
var numberOfVisits = localStorage.getItem("numberOfVisits");
var numberOfLikes = localStorage.getItem("numberOfLikes");
const likesDiv = document.querySelector(".like");

if (!numberOfVisits) {
  numberOfVisits = 0;
}

if (!numberOfLikes) {
  numberOfLikes = 0;
}

numberOfVisits = +numberOfVisits + 1; 

localStorage.setItem("numberOfVisits", numberOfVisits);

document.querySelector(".visitNumber").innerHTML = numberOfVisits;
document.querySelector(".likesNumber").innerHTML = numberOfLikes;


$('.like').one('click', function() {
  numberOfLikes = +numberOfLikes + 1; 

  localStorage.setItem("numberOfLikes", numberOfLikes);
  document.querySelector(".likesNumber").innerHTML = numberOfLikes;

});


likesDiv.addEventListener('click', function(){
  likesDiv.classList.add('active');
})
  