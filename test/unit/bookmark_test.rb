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

require 'test_helper'

class BookmarkTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
