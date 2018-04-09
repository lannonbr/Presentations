window.onload = function() {
  const menuButton = document.getElementById("menu-button");
  const nav = document.getElementsByTagName("nav")[0];

  menuButton.onclick = function() {
    if (nav.className == "") {
      nav.className = "nav-open";
      menuButton.className = "fa fa-times";
    } else {
      nav.className = "nav-close";
      menuButton.className = "fa fa-bars";
      setTimeout(function() {
        nav.className = "";
      }, 300);
    }
  };
};
