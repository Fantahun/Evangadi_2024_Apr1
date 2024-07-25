let footerH3 = $(".footer-links-wrapper h3"); //get all h3 tags in a footer
console.log(footerH3);

// let uls = footerH3.next();  // getting items which are next to h3 (the uls based on our structure)
// console.log(uls);

// browser current width

footerH3.on("click", (ev) => {
  console.log(ev.target);
  let windowWidth = $(window).width(); // jquery
  // let windowWidth = window.outerWidth; // vanilla js  -- notice innerWidth VS outerWidth
  console.log(windowWidth);

  if (windowWidth <= 768) {
    // check if the window width is for small screens (small devices...)
    $(ev.target).toggleClass("expanded"); //make the + icon changed to X when the lists expand
    // console.log(ev.target);
    $(ev.target).next().slideToggle("slow"); //MAKE THE UL VISIBLE AND HIDDEDN ON CLICK
  }
});

// manage the hidden parts after click
$(window).resize(() => {
  let windowWidth = $(window).width(); // jquery
  if (windowWidth > 768) {
    $(".footer-links-wrapper ul").css("display", "block"); //MAKE THE UL VISIBLE AND HIDDEDN ON CLICK
  } else {
    $(".footer-links-wrapper ul").css({ display: "none" });
  }
});
