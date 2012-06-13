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
$('li a.destroyBookmark').live('click', function(e) {
  e.preventDefault();
  $.post(this.href, { _method: 'delete' }, null, "script");
  $(this).closest("li").fadeOut(600, function(){
  $(this).closest("li").remove();
  });
  return false; 
});

  $('nav ul li a#helpButton').mouseenter(function(e){
  	$(this).tooltip({'placement':'left'})
  });
  
  $('a#newGroupButton').mouseenter(function(e){
    $(this).tooltip({'placement':'bottom'})
  });

  $("a#newGroupButton").click(function(e){
    $.post("/groups", null, "script");
   });

   $("nav ul li a#helpButton").click(function(e){
   $('#myModal').modal('show');
   });

   $("#addBookmark").click(function(e){
      e.preventDefault();
      if ($('input#addBookmarkField').val() != ''){
        $("input#addBookmarkFieldModal").val($('input#addBookmarkField').val());
      } else $('input#addBookmarkFieldModal').val('');
      $("input#nameModal").val('');
      $('#addModal').modal('show');
      $('li.current-rating').width('26');
   });

   var email = $("input#username").val();
   $("ul li a#logOutIcon").popover({placement:'bottom', content: email});

   $('#mainSplitter').jqxSplitter({ width: '100%', height: '100%', panels: [{ size: '20%' }, { size: '80%'}] });
   

   $(".star-rating a.one-star").click(function(e){
     $('li.current-rating').width('26');
     $('input#ratingModal').val('1');
   });

   $(".star-rating a.two-stars").click(function(e){
     $('li.current-rating').width('52');
     $('input#ratingModal').val('2');
   });

   $(".star-rating a.three-stars").click(function(e){
     $('li.current-rating').width('73');
     $('input#ratingModal').val('3');
   });

   $(".star-rating a.four-stars").click(function(e){
     $('li.current-rating').width('94');
     $('input#ratingModal').val('4');
   });

   $(".star-rating a.five-stars").click(function(e){
     $('li.current-rating').width('120');
     $('input#ratingModal').val('5');
   });

   $("li.draggable").draggable({ 
    opacity: 0.5,
    revert: true });

   $("li.droppable").droppable({
      accept: '.draggable',
      over: function(event, ui) {
           $(this).addClass('droppableHover');
      },
      out: function(event, ui) {
           $(this).removeClass('droppableHover');
      },
      drop: function(event, ui){
        $(this).removeClass('droppableHover');
        $(this).effect('highlight', {color:"#ff0000"}, 1000);
        var group = $(this).attr('id');
        var bookmark = ui.draggable.attr('id');
        $('li#'+bookmark).remove();
        group = group.substr(6);
        bookmark = bookmark.substr(9);
        $.ajax({
          type: 'GET',
          url: '/bookmarks/drop',
          data: {bookmark: bookmark, group: group}
        });
      }
   });

   $('a.liGroup').live('click', function(){
    var id = $(this).closest('li').attr('id');
    if ($(this).children().hasClass('icon-folder-close')){
      id = id.substr(6);
      $.ajax({
          type: 'GET',
          url: '/groups/showgroup',
          data: {id: id}
      });
      $(this).children().removeClass().addClass('icon-folder-open');
    }
    else {
      id = id.substr(6);
      container = 'ul#group-' + id;
      $(container).remove();
      $(this).children().removeClass().addClass('icon-folder-close');
    }
   });
});

