class AddForeignkeysToTables < ActiveRecord::Migration
  def change
  	add_column :bookmarks, :user_id, :integer
  	add_column :groups, :user_id, :integer
  end
end
