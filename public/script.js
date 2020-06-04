window.onload = function() {
  // Seperate the header letters into individual spans. (cleaner markup)
  let target = $("#title-name");
  target.html(
    target.text().replace(/./g, `<span class="hover-letter">$&</span>`)
  );

  // Parallax fade out the intro section on scrollHeight
  function parallaxFade() {
    $(window).scroll(function() {
      // Checking width after scroll prevents function from running inbetween screen resizing
      if ($(window).width() <= 1024) {
        if ($(this).scrollTop() > 0) {
          $(".intro").css({
            opacity: 1 - ($(window).scrollTop() / $(".intro").height()) * 1.5,
            position: "fixed"
          });
        } else {
          $(".intro").css({ opacity: "1", position: "fixed" });
        }
      } else {
        $(".intro").css("position", "static");
      }
    });
  }

  $(document).ready(parallaxFade);
  $(window).resize(parallaxFade);

  // Scripting the accordion slide for about section
  $(".accordion").click(function() {
    $(this).toggleClass("active");
    let p = $(this).next();
    if (p.css("height") != "0px") {
      p.css({ height: "0px" });
    } else {
      p.css({ height: p[0].scrollHeight + "px" });
    }
  });

  /* Swap out the static images for gifs for the project tiles */
  $(".project-wrapper").hover(function() {
    $(this)
      .find(".demo-jpg")
      .toggle();
    $(this)
      .find(".demo-gif")
      .toggle();
    $(this)
      .find("a")
      .css("pointer-events", "auto");
  });

  // Flip more-soon card animation
  $(".more-soon").hover(function() {
    $(this).toggleClass("flip-card");
  });
  fetch("https://ranmoji.herokuapp.com/emojis/api/v.1.0/")
    .then(response => response.json())
    .then(data => {
      console.log("emoji:", data.emoji);
    });
};
