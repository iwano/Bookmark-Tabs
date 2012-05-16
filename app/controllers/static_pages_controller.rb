class StaticPagesController < ApplicationController
  
  def mybookmarks
  	@user = current_user
  end

  def home
  end

  def help
  end
end
