class BookmarksController < ApplicationController
  def create
   bookmark = current_user.bookmarks.build(params[:bookmark])
    if bookmark.save
      flash[:success] = "The product has been added to the database."
      redirect_to root_path
    end
 end
end
