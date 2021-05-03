
const colorRed= document.querySelector(".make-red");
const colorBlue = document.querySelector(".make-blue");
const colorPink = document.querySelector(".make-pink");
const colorYellow = document.querySelector(".make-yellow");
const colorOrange = document.querySelector(".make-orange");
const colorBody = document.querySelector(".body");
const noColor = document.querySelector(".clear")



const redBodyColor = () => {


colorBody.classList.remove("background-orange");
colorBody.classList.remove("background-pink");
colorBody.classList.remove("background-blue");
colorBody.classList.remove("background-yellow");
colorBody.classList.add("background-red");

};

colorRed.addEventListener("click", redBodyColor);



colorRed.addEventListener("keydown", function(key) {
    if (key.keyCode === 49) {
        key.preventDefault();
        document.getElementById("red").click();
    }
});



 const blueBodyColor = () => {


colorBody.classList.remove("background-red");
colorBody.classList.remove("background-orange");
colorBody.classList.remove("background-pink");
colorBody.classList.remove("background-yellow");
colorBody.classList.add("background-blue");

};

colorBlue.addEventListener("click", blueBodyColor);



const orangeBodyColor = () => {


colorBody.classList.remove("background-red");
colorBody.classList.remove("background-pink");
colorBody.classList.remove("background-blue");
colorBody.classList.remove("background-yellow");
colorBody.classList.add("background-orange");

};

colorOrange.addEventListener("click", orangeBodyColor);




 const pinkBodyColor = () => {


colorBody.classList.remove("background-red");
colorBody.classList.remove("background-blue");
colorBody.classList.remove("background-yellow");
colorBody.classList.remove("background-orange");
colorBody.classList.add("background-pink");


};

colorPink.addEventListener("click", pinkBodyColor);




 const yellowBodyColor = () => {


colorBody.classList.remove("background-red");
colorBody.classList.remove("background-blue");
colorBody.classList.remove("background-orange");
colorBody.classList.remove("background-pink");
colorBody.classList.add("background-yellow");


};

colorYellow.addEventListener("click", yellowBodyColor);

  const noBodyColor = () => {


colorBody.classList.remove("background-orange");
colorBody.classList.remove("background-pink");
colorBody.classList.remove("background-blue");
colorBody.classList.remove("background-yellow");
colorBody.classList.remove("background-red");
colorBody.classList.add("noBackground");

};

noColor.addEventListener("click",noBodyColor );

var menu = document.querySelector(".menu")
var ham = document.querySelector(".ham")
var xIcon = document.querySelector(".xIcon")
var menuIcon = document.querySelector(".menuIcon")

ham.addEventListener("mouseenter", toggleMenu)
ham.addEventListener("click", toggleMenu)

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    xIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    xIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

var menuLinks = document.querySelectorAll(".menuLink")

menuLinks.forEach(
  function (menuLink) {
    menuLink.addEventListener("click", toggleMenu)
  }
)

