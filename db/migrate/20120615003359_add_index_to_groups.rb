class AddIndexToGroups < ActiveRecord::Migration
  def change
  	add_index "groups", ["name"], :name => "index_groups_on_name", :order => {:name => :desc}
  end
end
