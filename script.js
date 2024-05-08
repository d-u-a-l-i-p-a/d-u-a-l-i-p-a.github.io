window.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY;
  var transitionPoint1 = 500;
  var pausePoint = 600;
  var transitionPoint2 = 2400;

  var opacity, r, g, b;

  if (scrollPosition < transitionPoint1) {
      opacity = Math.min(1, scrollPosition / transitionPoint1);
      r = Math.round(82 + (1 - opacity) * (0 - 82));
      g = Math.round(148 + (1 - opacity) * (23 - 148));
      b = Math.round(255 + (1 - opacity) * (61 - 255));
  } else if (scrollPosition >= transitionPoint1 && scrollPosition < pausePoint) {
      opacity = 1;
      r = 82;
      g = 148;
      b = 255;
  } else if (scrollPosition >= pausePoint && scrollPosition < transitionPoint2) {
      opacity = Math.min(1, (scrollPosition - pausePoint) / (transitionPoint2 - pausePoint));
      r = 0;
      g = Math.round(172 - opacity * (172 - 0));
      b = Math.round(192 - opacity * (192 - 61));
  }

  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

  if (scrollPosition >= pausePoint) {
    var skyElements = document.querySelectorAll("#sky");
    skyElements.forEach(function(element) {
        element.classList.add("helvetica-title-bg");
        element.classList.remove("helvetica-bg"); // Supprime la classe "helvetica-bg" au cas où elle aurait été ajoutée précédemment
    });
} else {
    var skyElements = document.querySelectorAll("#sky");
    skyElements.forEach(function(element) {
        element.classList.remove("helvetica-title-bg");
        element.classList.add("helvetica-title");
    });
}
});


window.onbeforeunload = function(e) {
    localStorage.setItem('scrollpos', window.scrollY);
};

document.getElementById("defaultOpen").click();
      function openTab(evt, cityName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
      }