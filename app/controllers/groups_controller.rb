class GroupsController < ApplicationController
  def create
  	name = group_name_generator
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

 def name
  Group.find(params[:id]).update_attributes(name: params[:name])
  render :nothing => true
 end
end
