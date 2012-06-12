class StaticPagesController < ApplicationController
  
  def mybookmarks
  	user = current_user
  	noBookmarks= user.bookmarks.count
  	@username = user.email[0..user.email.index('@')-1]
  	@bookmarks = user.bookmarks
    @groups = user.groups
  	@randomPage = @bookmarks[rand(noBookmarks) - 1].url unless noBookmarks == 0
  end

  def home
  	redirect_to mybookmarks_path unless !signed_in? 
  end

end
