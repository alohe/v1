$(window).scroll(function(e) {
  if (window.innerWidth > 998) {
    var $el = $(".fixedElement");
    var isPositionFixed = $el.css("position") == "fixed";
    if ($(this).scrollTop() > 400 && !isPositionFixed) {
      $el.css({ position: "fixed", top: "0px" });
      var hed = document.querySelector("#projectsheader");
      hed.classList.add("fixednav");
    }
    if ($(this).scrollTop() < 400 && isPositionFixed) {
      $el.css({ position: "static", top: "0px" });
      var hed = document.querySelector("#projectsheader");
      hed.classList.remove("fixednav");
    }
  }
});

/* firebase loadershow document.querySelectorAll('.dark-card') length is 0 */

$(window).on("load", function() {

  setTimeout(() => {
    var fireload = document.querySelectorAll(".dark-card");
    var fireloader = document.querySelector("#fireloader");
    if (fireload.length <= 0) {
      //show loader
      fireloader.hidden = false;

      /* setTimeout(() => {
        $("#fireloader").fadeOut();
      }, 5000); */
    } else {
      //hide loader
      fireloader.hidden = true;
    }
  }, 1000);
  
  $(".load-icon").fadeOut();
  $(".pre-loader")
    .delay(350)
    .fadeOut("slow");
  $("body")
    .delay(350)
    .css({ overflow: "visible" });

});

var myskills = [
  "adobe illustrator",
  "adobe photoshop ",
  "angularjs",
  "express.js",
  "html5",
  "javascript ",
  "node.js",
  "python",
  "web design",
  "webdeveloper",
  "website redesign",
  "electron"
];

/* skills */
var skills = document.querySelector("#skills");

for (var i = 0; i < myskills.length; i++) {
  skills.innerHTML += "<a>" + myskills[i] + "</a>";
}

//typed

var typed3 = new Typed("#typeda", {
  //strings: ['the world’s leading brands', 'creatives', 'Bloggers','Startups','Businesses', 'Designers', 'everyone'],
  strings: [
    "Hello, I’m Alemalohe.",
    "I’m a Developer",
    "I’m a Strategist",
    "I’m a Problem solver",
    "I’m a Designer",
    "I’m a Collaborator",
    "I’m a Specialist"
  ],
  typeSpeed: 60,
  backSpeed: 60,
  backDelay: 500,
  smartBackspace: true, // this is a default
  loop: true
});
