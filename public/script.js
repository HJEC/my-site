window.onload = function() {
  // Seperate the header letters into individual spans. (cleaner markup)
  let target = $("#title-name");
  target.html(
    target.text().replace(/./g, `<span class="hover-letter">$&</span>`)
  );

  // Parallax fade out the intro section on scrollHeight

  function parallaxFade() {
    $(window).scroll(function() {
      if ($(window).width() <= 770) {
        if ($(this).scrollTop() > 0) {
          console.log("three");
          $(".intro").css({
            opacity: 1 - ($(window).scrollTop() / $(".intro").height()) * 1.5,
            position: "fixed"
          });
        } else {
          $(".intro").css({ opacity: "1", position: "fixed" });
        }
      } else {
        console.log("four");
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
    console.log(p);
    if (p.css("height") != "0px") {
      console.log("this");
      p.css({ height: "0px" });
    } else {
      console.log("scrollheight is:", p[0].scrollHeight);
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

  fetch("https://ranmoji.herokuapp.com/emojis/api/v.1.0/")
    .then(response => response.json())
    .then(data => {
      console.log("emoji:", data.emoji);
    });
};
