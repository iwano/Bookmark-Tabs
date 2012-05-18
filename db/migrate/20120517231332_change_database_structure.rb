class ChangeDatabaseStructure < ActiveRecord::Migration
  def up
  	drop_table :sites
  	remove_column :bookmarks, :description
  	change_column :bookmarks, :rating, :integer, :default => 0
  end

  def down
  	create_table :sites do |t|
      t.string  :url
    end
  	add_column :bookmarks, :description, :string
  	add_column :bookmarks, :rating, :integer, :default => 0
  end
end
