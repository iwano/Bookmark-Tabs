# == Schema Information
#
# Table name: bookmarks
#
#  id          :integer         not null, primary key
#  name        :string(255)
#  description :string(255)
#  rating      :integer
#  created_at  :datetime        not null
#  updated_at  :datetime        not null
#  user_id     :integer
#

class Bookmark < ActiveRecord::Base
  attr_accessible :url, :name, :description, :rating

  belongs_to :user
  belongs_to :site
  has_many :relationships
  has many :groups, :through :relationships
end
