# == Schema Information
#
# Table name: bookmarks
#
#  id         :integer         not null, primary key
#  name       :string(255)
#  rating     :integer         default(0)
#  created_at :datetime        not null
#  updated_at :datetime        not null
#  user_id    :integer
#  url        :string(255)
#

class Bookmark < ActiveRecord::Base
  attr_accessible :url, :name, :description, :rating

  validates :url, :user_id, presence: true

  belongs_to :user
  has_many :relationships
  has_many :groups, :through => :relationship
end
