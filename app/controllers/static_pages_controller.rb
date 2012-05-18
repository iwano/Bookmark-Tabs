class StaticPagesController < ApplicationController
  
  def mybookmarks
  	@user = current_user
  	@bookmarks = @user.bookmarks
  end

  def home
  	redirect_to mybookmarks_path unless !signed_in? 
  end

  def help
  end
end
