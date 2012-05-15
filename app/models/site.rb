# == Schema Information
#
# Table name: sites
#
#  id         :integer         not null, primary key
#  url        :string(255)
#  created_at :datetime        not null
#  updated_at :datetime        not null
#

class Site < ActiveRecord::Base
  attr_accessible :url

  has_many :bookmarks
end
