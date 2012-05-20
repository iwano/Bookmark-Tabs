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
$('td a.destroyBookmark').click(function(e) {
  e.preventDefault();
    // we just need to add the key/value pair for the DELETE method
    // as the second argument to the JQuery $.post() call
      $.post(this.href, { _method: 'delete' }, null, "script");
      $(this).closest("tr").fadeOut(600, function(){
        $(this).closest("tr").remove();
      });
      return false; 
  });

  // Bind the resize event. When any test element's size changes, update its
  // corresponding info div.
  $('section#bookmarksList').resize(function(){
    var width = $(this).width() - 238;

    // Update the info div width and height - replace this with your own code
    // to do something useful!
    $('section#navigationFrame').width(1040 - width);
  });

  $('nav ul li a#helpButton').mouseenter(function(e){
  	$(this).tooltip('show')
  });
  $('nav ul li a#helpButton').mouseleave(function(e){
  	$(this).tooltip('hide')
  });

   $("nav ul li a#helpButton").click(function(e){
   $('#myModal').modal('show');
   });

   var email = $("input#username").val();
   $("ul li a#logOutIcon").popover({placement:'top', content: email});

   $('#mainSplitter').jqxSplitter({ width: '100%', height: '100%', panels: [{ size: '20%' }, { size: '80%'}] });
   $('#rightSplitter').jqxSplitter({  height: '100%', orientation: 'horizontal', panels: [{ size: '80%', collapsible: false }, { size: '20%' }] });

});

