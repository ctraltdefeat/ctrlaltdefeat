
$(document).ready(function(){
        $('.starfield').starfield({
        starColor:  "rgba(255,255,255,1)",
        bgColor:        "rgba(0,0,0,1)",
				mouseMove:	true,
				mouseColor:	"rgba(0,0,0,0.2)",
				mouseSpeed:	20,
				fps:		15,
				speed:		2,
				quantity:	512,
				ratio:		256,
        });

        // Add active class to the current button (highlight it)
        var btnContainer = document.getElementById('myBtnContainer');
        var btns = btnContainer.getElementsByClassName("btn");
        for (var i = 0; i < btns.length; i++){
          btns[i].addEventListener("click", function(){
            var current = document.getElementsByClassName(" active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
          });
        }

		});

		var texts = [
			"I'M ERIK'S WEBSITE",
      "HE IS NOT HERE RIGHT NOW",
			"BUT LEAVE A MESSAGE AFTER THE BEEP",
			"BEEP",
      "",
      "...",
      "Okay, Erik has no answering machine",
      "But we had some good times",
      "Right?",
      "you are still here?",
      "I suppose you could check out Erik's work.",
			];
		var count = 0;

		function changeText() {
	  $("#rotationator5000").text(texts[count]);
	  count < 11 ? count++ : count = 0;
		}
		setInterval(changeText, 5000);




/*Expand and Collapse Function*/
function xpandycollapsy() {
    var x = document.getElementById("portwineisokay");
    var y = document.getElementById("portfoliobutt");

    if (x.style.display === "flex") {
        x.style.display = "none";
    } else {
        x.style.display = "flex";
    }
    if (y.innerHTML === "SEE") {
        y.innerHTML = "UNSEE";
    } else {
        y.innerHTML = "SEE";
    }
}
function xpandycollapsz() {
    var x = document.getElementById("privacyblurb");
    if (x.style.display === "flex") {
        x.style.display = "none";
    } else {
        x.style.display = "flex";
    }
}

/*Filter Buttons*/
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("portfolio");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    w3AddClass(x[i], "hide");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3RemoveClass(x[i], "hide");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}
