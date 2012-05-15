# == Schema Information
#
# Table name: groups
#
#  id         :integer         not null, primary key
#  name       :string(255)
#  created_at :datetime        not null
#  updated_at :datetime        not null
#  user_id    :integer
#

class Group < ActiveRecord::Base
  attr_accessible :name

  belongs_to :user
  has_many :relationships
  has many :bookmarks, :through :relationships
end
