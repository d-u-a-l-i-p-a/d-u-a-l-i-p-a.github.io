window.addEventListener('scroll', function() {
    // Calculate the opacity based on scroll position
    var opacity = Math.min(1, window.scrollY / 1000); // You can adjust the 500 to change the rate of darkening
    // Calculate the intermediate color
    var g = Math.round(63 + (1 - opacity) * (172 - 63));
    var b = Math.round(97 + (1 - opacity) * (192 - 97));
    // Set the background color with opacity
    document.body.style.backgroundColor = `rgb(0, ${g}, ${b})`;
  });

document.addEventListener("DOMContentLoaded", function(event) { 
    var scrollpos = localStorage.getItem('scrollpos');
    if (scrollpos) window.scrollTo(0, scrollpos);
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