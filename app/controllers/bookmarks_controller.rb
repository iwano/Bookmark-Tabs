class BookmarksController < ApplicationController
  def create
   @bookmark = current_user.bookmarks.build(params[:bookmark])
   @bookmark.save
    respond_to do |format|  
      format.js 
    end
 end

 def destroy
 	Bookmark.find(params[:id]).destroy
 	respond_to do |format|  
      format.js   { render :nothing => true }  
    end
 end

 def show
 end
end
