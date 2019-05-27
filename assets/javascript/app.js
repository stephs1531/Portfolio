$("#balm").on("click", function() {
    $("#project-images").empty();
    $('#project-images').prepend('<img id="first-image" src="assets/images/the_balm/balm_mockup.png" />')
    $('#project-images').append('<img class="image" src="assets/images/the_balm/the_balm_home.jpg" /> <img class="image" src="assets/images/the_balm/the_balm_product2.jpg" /> <img class="image" src="assets/images/the_balm/product_detail2.jpg" /> ')
});

$("#spotify").on("click", function() {
    $("#project-images").empty();
    $("#project-info").empty();
    $("#project-info").append('<h1>Musicians in Memoriam</h1>');
    $("#project-info").append('<p>website design | interactive experience</p>');
    $("#project-info").append("<p>Interactive experience sponsored by Spotify to honor recently deceased musicians. The experience allows current fans of the artist to relive that artist's career and allow new fans to discover their music for the first time. The timeline scrolls sideways through the different areas of the artist's career and a video of a live performance plays in the background. At the end of the experience, users have the option to add a curated playlist with the artist's best-known music to their own Spotify accounts.</p>");
    $('#project-images').prepend('<img id="first-image" src="assets/images/spotify_bowie/bowie_big.jpg" />')
    $('#project-images').append('<iframe src="https://player.vimeo.com/video/338606195" width="640" height="360" frameborder="0" margin="0 auto" allow="autoplay; fullscreen" allowfullscreen></iframe><p>See it working! (Heads up, I have sound!)</p>')
    $('#project-images').append('<img class="image" src="assets/images/spotify_bowie/bowie_landingscreen.jpg"/> <img class="image" src="assets/images/spotify_bowie/bowie_frame1.png" /> <img class="image" src="assets/images/spotify_bowie/bowie_frame2.png" /> <img class="image" src="assets/images/spotify_bowie/bowie_frame3.png" /> <img class="image" src="assets/images/spotify_bowie/bowie_frame4.png" /> <img class="image" src="assets/images/spotify_bowie/bowie_frame5.png" /> <img class="image" src="assets/images/spotify_bowie/bowie_exitscreen.jpg" />')
});

$("#garage").on("click", function() {
    $("#project-images").empty();
    $('#project-images').prepend('<img id="first-image" src="assets/images/spotify_bowie/bowie_big.jpg" />')
    $('#project-images').append('<img class="image" src="assets/images/spotify_bowie/bowie_landingscreen.jpg"/> <img class="image" src="assets/images/spotify_bowie/bowie_frame1.png" /> <img class="image" src="assets/images/spotify_bowie/bowie_frame2.png" /> <img class="image" src="assets/images/spotify_bowie/bowie_frame3.png" /> <img class="image" src="assets/images/spotify_bowie/bowie_frame4.png" /> <img class="image" src="assets/images/spotify_bowie/bowie_frame5.png" /> <img class="image" src="assets/images/spotify_bowie/bowie_exitscreen.jpg" />')
});
