window.onload = function() {
  // Seperate the header letters into individual spans. (cleaner markup)
  var target = $("#target");
  target.html(
    target.text().replace(/./g, `<span class="hover-letter">$&</span>`)
  );

  fetch("https://ranmoji.herokuapp.com/emojis/api/v.1.0/")
    .then(response => response.json())
    .then(data => {
      console.log("emoji:", data.emoji);
    });
};
