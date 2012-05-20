class BookmarksController < ApplicationController
  def create
   bookmark = current_user.bookmarks.build(params[:bookmark])
    if bookmark.save
      flash[:success] = "The product has been added to the database."
      redirect_to root_path
    end
 end

 def destroy
 	Bookmark.find(params[:id]).destroy
 	respond_to do |format|  
      format.js   { render :nothing => true }  
    end
 end
end
