let ul = $("ul .child");
ul.each((index, element) => {
  element.html = index + 1;
  console.log(element.textContent);
  $(element).on("click", () => {
    $(element).css("background-color", "red");
  });
});
