window.onload = function() {
  // Seperate the header letters into individual spans. (cleaner markup)
  var target = $("#title-name");
  target.html(
    target.text().replace(/./g, `<span class="hover-letter">$&</span>`)
  );

  $(".project-wrapper").hover(
    function() {
      $(".demo-jpg").toggle();
      $(".demo-gif").toggle();
      $(this)
        .find(".project-text")
        .addClass("text-slide");
    },
    function() {
      $(this)
        .find(".project-text")
        .removeClass("text-slide");
    }
  );

  fetch("https://ranmoji.herokuapp.com/emojis/api/v.1.0/")
    .then(response => response.json())
    .then(data => {
      console.log("emoji:", data.emoji);
    });
};
