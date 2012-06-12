# == Schema Information
#
# Table name: bookmarks
#
#  id         :integer         not null, primary key
#  name       :string(255)
#  rating     :integer         default(1)
#  created_at :datetime        not null
#  updated_at :datetime        not null
#  user_id    :integer
#  url        :string(255)
#  group_id   :integer         default(0)
#

class Bookmark < ActiveRecord::Base
  attr_accessible :url, :name, :rating

  validates :url, :user_id, presence: true
  validates :rating, :numericality => {:greater_than => 0, :less_than => 6}

  belongs_to :user
  belongs_to :groups

  default_scope order: 'bookmarks.name ASC'
end
