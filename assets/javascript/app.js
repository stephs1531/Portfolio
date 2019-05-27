$("#balm").on("click", function() {
    console.log("hi i've been clicked!");

    // event.preventDefault();
    $('#project-images').prepend('<img id="first-image" src="assets/images/the_balm/balm_mockup.png" />')
    $('#project-images').append('<img class="image" src="assets/images/the_balm/the_balm_home.jpg" /> <img class="image" src="assets/images/the_balm/the_balm_product2.jpg" /> <img class="image" src="assets/images/the_balm/product_detail2.jpg" /> ')
});

