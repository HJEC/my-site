window.onload = function() {
  // Seperate the header letters into individual spans. (cleaner markup)
  let target = $("#title-name");
  target.html(
    target.text().replace(/./g, `<span class="hover-letter">$&</span>`)
  );

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
  });

  fetch("https://ranmoji.herokuapp.com/emojis/api/v.1.0/")
    .then(response => response.json())
    .then(data => {
      console.log("emoji:", data.emoji);
    });
};
