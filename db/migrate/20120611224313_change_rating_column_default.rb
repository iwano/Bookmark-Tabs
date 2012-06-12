class ChangeRatingColumnDefault < ActiveRecord::Migration
  def up
  	change_column_default(:bookmarks, :rating, 1)
  end

  def down
  	change_column_default(:bookmarks, :rating, 0)
  end
end
