class StaticPagesController < ApplicationController
  
  def mybookmarks
  	user = current_user
  	@username = user.email[0..user.email.index('@')-1]
  	@bookmarks = user.bookmarks.where("group_id = ?", 0)
    @groups = user.groups
  end

  def home
  	redirect_to mybookmarks_path unless !signed_in? 
  end

end
