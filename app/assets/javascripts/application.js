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
  var source = $('#searchField').data('source');
  var item = $(this).text();
  source.splice($.inArray(item, source),1);
  $('#searchField').data('source', source)
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

   $('form#searchBookmarksForm').droppable({
      accept: '.draggable',
      over: function(event, ui) {
           $(this).addClass('droppableHoverSearchForm');
      },
      out: function(event, ui) {
           $(this).removeClass('droppableHoverSearchForm');
      },
      drop: function(event, ui){
        $(this).removeClass('droppableHoverSearchForm');
        $(this).effect('highlight', {color:"#ff0000"}, 1000);
        var bookmark = ui.draggable.attr('id');
        var name = ui.draggable.children().eq(1).text();
        var tab = ui.draggable.css({'opacity':'1', 'position':'relative', 'left':'0px', 'top':'0px'});
        $('li#'+bookmark).remove();
        bookmark = bookmark.substr(9);
        $.ajax({
          type: 'GET',
          url: '/bookmarks/drop',
          data: {bookmark: bookmark, group: 0},
          success : function(){
            var element = $(tab).draggable({ 
              opacity: 0.5,
              revert: true });
            var firstafteritem = $("ul#bookmarksList").children().filter(function () {
                return ($(this).children().eq(1).text() > name)
            } ).eq(0);
            if (firstafteritem.length > 0) {
              firstafteritem.before(element);
            }
            else {
              $("ul#bookmarksList").append(element);
            }
            // var position = tab.position();
            // $("div#rightSplitter").prop({ scrollTop: position.top - 200 });
            // tab.effect('highlight', {color:"#ff0000"}, 2000);
          }
        });   
      }
   });

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
        var name = ui.draggable.children().eq(1).text();
        var tab = ui.draggable.css({'opacity':'1', 'position':'relative', 'left':'0px', 'top':'0px'});
        $('li#'+bookmark).remove();
        group = group.substr(6);
        bookmark = bookmark.substr(9);
        $.ajax({
          type: 'GET',
          url: '/bookmarks/drop',
          data: {bookmark: bookmark, group: group},
          success : function(){
            var element = $(tab).draggable({ 
              opacity: 0.5,
              revert: true });
            var g = $('ul#group-' + group);
            var firstafteritem = g.children().filter(function () {
                return ($(this).children().eq(1).text() > name)
            } ).eq(0);
            if (firstafteritem.length > 0) {
              firstafteritem.before(element);
            }
            else {
              g.append(element);
            }
            // var position = tab.position();
            // $("div#rightSplitter").prop({ scrollTop: position.top - 200 });
            // tab.effect('highlight', {color:"#ff0000"}, 2000);
          }
        });   
      }
   });

   $('a.liGroup').live('click', function(){
    var id = $(this).closest('li').attr('id');
    id = id.substr(6);
    if ($(this).children().hasClass('icon-folder-close')){
      if ($(this).parent().next().is('ul')){
        container = 'ul#group-' + id;
        $(container).show();
      }else{
        $.ajax({
            type: 'GET',
            url: '/groups/showgroup',
            data: {id: id}
        });
    }$(this).children().removeClass().addClass('icon-folder-open');
    }
    else {
      container = 'ul#group-' + id;
      $(container).hide();
      $(this).children().removeClass().addClass('icon-folder-close');
    }
   });

   $('a#randomPageBtn').click(function(event){
      event.preventDefault();
      $.ajax({
        type: 'GET',
        url: '/bookmarks/random'
      });
   });

   $('li input[type="text"]').live('blur', function() {
    var name =  $(this).prev().text().replace(/\s/g, "");
    var id = $(this).parent().attr('id');
     if ($.trim(this.value) != '' && $.trim(this.value) != name){
       $(this).prev().html('<i class="icon-folder-close"></i> ' + this.value);
       id = id.substr(6);
       name = this.value;
       $.ajax({
         type: 'GET',
         url: '/groups/name',
         data: {name: name, id: id}
       });
      }
     $(this).hide();
     $(this).prev().show();
     correctGroupsPosition(id, name);
   });

   function correctGroupsPosition(id, gname){
      var element = $('li#group_' + id);
      var name = gname;
      var firstafteritem = $("div#groupsDiv").children().filter(function () {
          return ($(this).children().eq(1).text().replace(/\s/g, "") > name)
      } ).eq(0);
      if (firstafteritem.length > 0) {
        firstafteritem.before(element);
      }
      else {
        $("div#groupsDiv").append(element);
      }
   }

   $('li input[type="text"]').live('keypress', function(event) {
      if (event.keyCode == '13') {
        var name =  $(this).prev().text().replace(/\s/g, "");
        var id = $(this).parent().attr('id');
        if ($.trim(this.value) != '' && $.trim(this.value) != name){
         $(this).prev().html('<i class="icon-folder-close"></i> ' + this.value);
         id = id.substr(6);
         name = this.value;
         $.ajax({
          type: 'GET',
          url: '/groups/name',
            data: {name: name, id: id}
         });
       }
       $(this).hide();
       $(this).prev().show();
       correctGroupsPosition(id, name);
      }
    });

   $('#searchField').keypress(function(event) {
      if (event.keyCode == '13') {
        event.preventDefault();
        var name = $(this).val();
        $.ajax({
          type: 'GET',
          url: '/bookmarks/getid',
          data: {name: name}
        });
      }
    });

   $('a#demo').click(function(){
      var element = "<li>pppppp</li>";
      var name = "farabela";
      var firstafteritem = $("ul#bookmarksList").children().filter(function () {
          return ($(this).children().eq(1).text() > name)
      } ).eq(0);
      alert(firstafteritem.html());
      if (firstafteritem.length > 0) {
        firstafteritem.before(element);
      }
      else {
        $("#projectList").append(element);
      }
   });
});

