# == Schema Information
#
# Table name: relationships
#
#  id          :integer         not null, primary key
#  bookmark_id :integer
#  group_id    :integer
#  created_at  :datetime        not null
#  updated_at  :datetime        not null
#

class Relationship < ActiveRecord::Base
  attr_accessible :bookmark_id

  belongs_to :group
  belongs_to :bookmark
end
