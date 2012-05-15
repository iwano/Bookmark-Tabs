class RemoveUrlFromBookmarks < ActiveRecord::Migration
  def up
  	remove_column :bookmarks, :url
  end

  def down
  	add_column :bookmarks, :url, :string
  end
end
