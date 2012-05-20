class SessionsController < ApplicationController

  def loginnew
  user = user_exists(params[:session][:email])
    if user != nil
      if user && user.authenticate(params[:session][:password])
        sign_in user
        redirect_to "/static_pages/mybookmarks"
      else
        flash[:error] = 'Invalid email/password combination'
        redirect_to "/"
      end
    else
      user = User.new(:email => params[:session][:email], :password => params[:session][:password], :password_confirmation => params[:session][:password])
      if user.save
        sign_in user
        redirect_to "/static_pages/mybookmarks"
      else
        flash[:error] = 'Password is too short'
        redirect_to "/"
      end
    end
  end

  def destroy
    sign_out
    redirect_to root_path
  end
end
