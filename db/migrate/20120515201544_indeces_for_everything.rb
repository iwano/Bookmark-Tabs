class IndecesForEverything < ActiveRecord::Migration
  def up
  	add_index :users, :email, unique: true
  	add_index :users, :remember_token
  	add_index :bookmarks, :rating
  	add_index :groups, :name, unique: true
  end

  def down
  	remove_index :users, :email
  	remove_index :users, :remember_token
  	remove_index :bookmarks, :rating
  	remove_index :groups, :name
  end
end
