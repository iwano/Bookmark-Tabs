class GroupsController < ApplicationController
  def create
  	id = Group.count + 1
  	name = "Group" + id.to_s
  	@group = current_user.groups.build(name: name)
   	@group.save
  	respond_to do |format|  
      format.js 
    end
  end

  def destroy
 	Group.find(params[:id]).destroy
   	respond_to do |format|  
      format.js   { render :nothing => true }  
    end
 end

 def showgroup
  group = Group.find(params[:id])
  @bookmarks = group.bookmarks
  @id = group.id
  respond_to do |format|  
    format.js 
  end
 end
end
