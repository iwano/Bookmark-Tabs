class RemoveIndexFromGroups < ActiveRecord::Migration
  def up
  	remove_index :groups, :name
  end

  def down
  	add_index "groups", ["name"], :name => "index_groups_on_name", :unique => true
  end
end
