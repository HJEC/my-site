window.onload = function() {
  // Seperate the header letters into individual spans. (cleaner markup)
  let target = $("#title-name");
  target.html(
    target.text().replace(/./g, `<span class="hover-letter">$&</span>`)
  );

  // Scripting the accordion slide for about section
  $(".accordion").click(function() {
    $(this).toggleClass("active");
    console.log("next sibling", $(this).next());
  });
  /* Swap out the static images for gifs for the project tiles */
  $(".project-wrapper").hover(function() {
    $(this)
      .find(".demo-jpg")
      .toggle();
    $(this)
      .find(".demo-gif")
      .toggle();
  });

  fetch("https://ranmoji.herokuapp.com/emojis/api/v.1.0/")
    .then(response => response.json())
    .then(data => {
      console.log("emoji:", data.emoji);
    });
};
