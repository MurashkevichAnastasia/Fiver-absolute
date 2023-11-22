// ВЫПАДАЮЩЕЕ МЕНЮ-ЗАКЛАДКА
document.addEventListener("DOMContentLoaded", function() {
  // Закрываем выпадающее меню при клике вне его
  document.addEventListener("click", function(e) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
          var dropdown = dropdowns[i];
          if (!e.target.closest(".dropdown")) {
              dropdown.style.display = "none";
          }
      }
  });
});

