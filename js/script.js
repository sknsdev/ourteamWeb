menu.onclick = function responsiveAdd() {
  var x = document.getElementById('mainnav');
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}
