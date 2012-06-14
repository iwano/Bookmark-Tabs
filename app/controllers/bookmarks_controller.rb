class BookmarksController < ApplicationController
  def create
   @bookmark = current_user.bookmarks.build(url: params[:bookmark][:url], name: params[:bookmark][:name], rating: params[:bookmark][:rating])
   @bookmark.save
   Group.find(params[:bookmark][:group]).update_attributes(:user_id => current_user.id) unless params[:bookmark][:group] == ''
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

 def drop
 	Bookmark.find(params[:bookmark]).update_attributes(group_id: params[:group])
 	render :nothing => true
 end

 def random
 	@randomPage = random_page
 	respond_to do |format|  
    format.js 
  end
 end
end
