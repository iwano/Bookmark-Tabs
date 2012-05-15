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

require 'test_helper'

class BookmarkTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
