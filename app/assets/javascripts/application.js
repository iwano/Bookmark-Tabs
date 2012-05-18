// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require_tree .

$(function(){
  // Bind the resize event. When any test element's size changes, update its
  // corresponding info div.
  $('section#bookmarksList').resize(function(){
    var width = $(this).width() - 238;

    // Update the info div width and height - replace this with your own code
    // to do something useful!
    $('section#navigationFrame').width(1040 - width);
  });

  $('nav ul li a').mouseenter(function(e){
  	$(this).tooltip('show')
  });
  $('nav ul li a').mouseleave(function(e){
  	$(this).tooltip('hide')
  });

  
  $('div#xxx')
   .resizable({
     resize: function(e, ui) {
   }
  });

   $("a#helpButton").click(function(e){
    $('#myModal').modal('show');
   });
  
});


