class GroupsBookmarsRelationshipIsNowOneToMany < ActiveRecord::Migration
  def up
  	drop_table :relationships
  	add_column :bookmarks, :group_id, :integer, :default => 0
  end

  def down
  	create_table "relationships", :force => true do |t|
	    t.integer  "bookmark_id"
	    t.integer  "group_id"
  	end

  	remove_column :bookmarks, :group_id
  end
end
